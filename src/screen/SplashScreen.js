import React, {Component} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import Navigation from './Navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      Role: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.clear();

      this.setState({
        Role: false,
      });
    }, 2500);
  }
  // Token = AsyncStorage.getItem('Token');

  Nav() {
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.replace('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  }

  Splash = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <LottieView
          source={require('../Lottie/8370-loading.json')}
          autoPlay
          loop
        />
      </View>
    );
  };
  render() {
    console.log(this.state.Role);
    if (this.state.Role) {
      return <>{this.Splash()}</>;
    } else {
      return <>{this.Nav()}</>;
    }
  }
  // render() {
  //   return (
  //     <View
  //       style={{
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flex: 1,
  //       }}>
  //       <LottieView
  //         source={require('../Lottie/8370-loading.json')}
  //         autoPlay
  //         loop
  //       />
  //     </View>
  //   );
  // }
}
