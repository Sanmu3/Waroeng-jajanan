import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './LoginStyle';
import CheckBox from '@react-native-community/checkbox';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      CheckBox: false,
    };
  }
  render() {
    return (
      <View style={styles.Screen}>
        <View style={styles.Head}>
          <View style={styles.LogoBck}>
            <Image style={styles.Logo} source={require('./Logo.png')} />
          </View>
          <Text style={styles.Title}>Waroeng Jajanan</Text>
        </View>
        <View style={styles.Body}>
          <ScrollView style={{height: '60%', width: '85%'}}>
            <View style={styles.Input}>
              <TextInput placeholder="email" />
            </View>
            <View style={styles.InputPass}>
              <TextInput placeholder="pass" />
            </View>
            <View style={styles.fitur}>
              <View style={styles.rememberme}>
                <CheckBox />
                <Text>rememberme</Text>
              </View>
              <Text>Forgot pass</Text>
            </View>

            <View style={styles.Button}>
              <TouchableOpacity style={{width: '100%', alignItems: 'center'}}>
                <Text style={styles.ButtonText}>Button</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
