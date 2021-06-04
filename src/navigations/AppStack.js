import React from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './Screens';

const AppStack = createStackNavigator();

const AppStackNavigation = () => {

  return (
      <AppStack.Navigator
      // screenOptions={{headerShown: false}}
      >
        {/* Home */}
        <AppStack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* ChatScreen */}
        <AppStack.Screen
          name="ChatScreen"
          component={screens.ChatScreen}
          options={({route}) => ({
            title: route.params.userName,
          })}
        />
        {/* -------------------------------------------------- */}
      </AppStack.Navigator>
  );

};

export default AppStackNavigation;
