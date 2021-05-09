import React from 'react'
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
        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{title: 'Create Account'}}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{title: 'Login'}}
        />
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* ChatScreen */}
        <Stack.Screen
          name="ChatScreen"
          component={screens.ChatScreen}
          options={{title: 'Messages'}}
        />
        {/* OTP */}
        <Stack.Screen
          name="OTP"
          component={screens.OTP}
          options={{title: 'Confirmation'}}
        />
        {/* OTP */}
        <Stack.Screen name="111" component={screens.ChatCard} />
        {/* */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
