import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Splash';
import Login from '../Login';
import Register from '../Register';
import WelcomeAuth from '../WelcomeAuth';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={Splash} options={{headerShown:false}}/>
        <RootStack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{
          headerShown:false,
        }}/>
        <RootStack.Screen name="Login" component={Login} options={{
          headerShown:false,
        }}/>
        <RootStack.Screen name="Register" component={Register} options={{
          headerShown:false,
        }}/>
    </RootStack.Navigator>
);

export default RootStackScreen;