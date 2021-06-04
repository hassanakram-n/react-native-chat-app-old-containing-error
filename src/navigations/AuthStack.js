import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './Screens';

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
    return (
    <AuthStack.Navigator>
      {/* Login Screen */}
      <AuthStack.Screen
        name="Login"
        component={screens.Login}
        options={{title: 'Login'}}
      />
      {/* Signup Screen */}
      <AuthStack.Screen
        name="Signup"
        component={screens.Signup}
        options={{title: 'Create Account'}}
      />
      {/* OTP */}
      <AuthStack.Screen
        name="OTP"
        component={screens.OTP}
        options={{title: 'Confirmation'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
