import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './Screens';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{title: 'Create Account'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
