import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {styles} from '../style/LoginStyle';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      CheckBox: false,
    };
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.replace('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  }

  mengambilUser = () => {
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0ZnVsLWFwaS1sYXJhdmVsLTcuaGVyb2t1YXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYwMjkxNzA4MiwiZXhwIjoxNjAyOTIwNjgyLCJuYmYiOjE2MDI5MTcwODIsImp0aSI6IjdzSUZKVVZDZHowRngxUGoiLCJzdWIiOjQ4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.HE1kdEtt4eG9RFxM9yxPGCk4sjXLiK-f0nJeby10Yo0',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.mengambilUser();
  }

  Login = () => {
    const {email, password} = this.state;

    var dataToSend = {email: email, password: password};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    //POST request
    fetch('https://waroeng-jajanan.herokuapp.com/api/login', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          if (this.state.CheckBox == true) {
            AsyncStorage.setItem('token', token);
          }
          this.props.navigation.replace('Home');
        } else {
          ToastAndroid.show(
            'Pastikan Email dan Password BENAR!',
            ToastAndroid.LONG,
          );
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        ToastAndroid.show(
          'Pastikan Email dan Password BENAR!',
          ToastAndroid.LONG,
        );
      });
  };

  render() {
    return (
      <View style={styles.Screen}>
        <View style={styles.Head}>
          <View style={styles.LogoBck}>
            <Image style={styles.Logo} source={require('../Pic/Logo.png')} />
          </View>
          <Text style={styles.Title}>Waroeng Jajanan</Text>
        </View>
        <View style={styles.Body}>
          <ScrollView style={styles.Scroll}>
            <View style={styles.Input}>
              <TextInput
                placeholder="Email"
                onChangeText={(email) => this.setState({email})}
              />
            </View>

            <View style={styles.InputPass}>
              <TextInput
                style={{maxWidth: '80%'}}
                secureTextEntry={this.state.secureTextEntry}
                placeholder="Password"
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({secureTextEntry: !this.state.secureTextEntry})
                }>
                <Image
                  style={styles.Pass}
                  source={require('../logo/blur.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.fitur}>
              <View style={styles.rememberme}>
                <CheckBox
                  disabled={false}
                  value={this.state.CheckBox}
                  onValueChange={(value) => this.setState({CheckBox: value})}
                />
                <Text>Remember me</Text>
              </View>
              <Text
                onPress={() =>
                  this.props.navigation.navigate('ForgotPassword')
                }>
                Lupa Password
              </Text>
            </View>

            <View style={styles.Button}>
              <TouchableOpacity
                style={styles.Touch}
                onPress={() => this.Login()}>
                <Text style={styles.ButtonText}>Masuk</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => this.props.navigation.navigate('Register')}
                style={styles.Text}>
                Daftar
              </Text>
              <Text style={{letterSpacing: 0.6}}>
                {' '}
                Dulu Kalau Belum Punya akun
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
