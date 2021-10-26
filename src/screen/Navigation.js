import React from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Splash from './SplashScreen';
import Profile from './Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 30, height: 30, tintColor: colorSelected}}
      />
    </View>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../logo/home.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../logo/todo1.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
