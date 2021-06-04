import React from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigation from './AuthStack';
import AppStackNavigation from './AppStack';
import * as screens from './Screens';

const Stack = createStackNavigator();

const StackNavigation = () => {
  if (auth().currentUser == null) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* Auth Stack Navigation */}
          <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
          {/* Signup Screen */}
          <Stack.Screen name="AppStack" component={AppStackNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* Signup Screen */}
          <Stack.Screen name="AppStack" component={AppStackNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default StackNavigation;
