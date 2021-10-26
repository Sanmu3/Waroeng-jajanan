import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 200,
    h: 40,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15});
  };

  ClickInput = () => {
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 20, h: this.state.h + 20});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]}>
          <Text>
            {this.state.w},{this.state.h}
          </Text>
        </View>
        <TouchableOpacity onPress={this.ClickInput}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>

        <View
          style={[
            styles.TextInput,
            {width: this.state.w, height: this.state.h},
          ]}>
          <TouchableOpacity onPress={this.ClickInput}>
            <TextInput placeholder="Try" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#ccc',
    maxWidth: 250,
    height: 50,
    marginTop: 100,
  },
});
