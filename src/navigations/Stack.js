import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './Screens';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // screenOptions={{headerShown: false}}
      >
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{title: 'Login'}}
        />
        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{title: 'Create Account'}}
        />
        {/* OTP */}
        <Stack.Screen
          name="OTP"
          component={screens.OTP}
          options={{title: 'Confirmation'}}
        />
        {/* */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
