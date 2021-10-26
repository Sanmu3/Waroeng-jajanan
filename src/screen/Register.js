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
import {styles} from '../style/RegisterStyle';
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      ulangiPassword: '',
      cekPassword: true,
      ulangiCekPassword: true,
    };
  }

  register = () => {
    const {name, email, password, ulangiPassword} = this.state;

    //POST json
    var dataToSend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: ulangiPassword,
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('https://waroeng-jajanan.herokuapp.com/api/register', {
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
        const {msg} = responseJson;
        if (msg) {
          ToastAndroid.show('Sukses Mendaftar', ToastAndroid.LONG);
          this.props.navigation.goBack();
        } else {
          ToastAndroid.show(
            'Pastikan Form Sudah Terisi dengan benar',
            ToastAndroid.LONG,
          );
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        ToastAndroid.show(
          'Pastikan Form Sudah Terisi dengan benar',
          ToastAndroid.LONG,
        );
      });
  };

  render() {
    return (
      <View style={styles.Screen}>
        <View style={styles.Head}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.back}
                source={require('../logo/curve-arrow.png')}
              />
            </TouchableOpacity>
            <View style={styles.LogoBck}>
              <Image style={styles.Logo} source={require('../Pic/Logo.png')} />
            </View>
          </View>
          <Text style={styles.Title}>Sign In</Text>
        </View>
        <View style={styles.Body}>
          <ScrollView style={styles.Scroll}>
            <View style={styles.Input}>
              <TextInput
                placeholder="Nama"
                onChangeText={(name) => this.setState({name})}
              />
            </View>
            <View style={styles.Input}>
              <TextInput
                placeholder="Email"
                onChangeText={(email) => this.setState({email})}
              />
            </View>

            <View style={styles.InputPass}>
              <TextInput
                style={{maxWidth: '80%'}}
                secureTextEntry={this.state.cekPassword}
                placeholder="Password"
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({cekPassword: !this.state.cekPassword})
                }>
                <Image
                  style={styles.Pass}
                  source={require('../logo/blur.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.InputPass}>
              <TextInput
                style={{maxWidth: '80%'}}
                secureTextEntry={this.state.ulangiCekPassword}
                placeholder="Konfirmasi Password"
                onChangeText={(ulangiPassword) =>
                  this.setState({ulangiPassword})
                }
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    ulangiCekPassword: !this.state.ulangiCekPassword,
                  })
                }>
                <Image
                  style={styles.Pass}
                  source={require('../logo/blur.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.Button}>
              <TouchableOpacity
                style={styles.Touch}
                onPress={() => this.register()}>
                <Text style={styles.ButtonText}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
