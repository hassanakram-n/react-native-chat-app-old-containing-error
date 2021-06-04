import React from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './Screens';

const Stack = createStackNavigator();
const StackNavigation = () => {

if(auth().currentUser==null){
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{headerShown: false}}
      >
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
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* Home */}
        <Stack.Screen
          name="ChatScreen"
          component={screens.ChatScreen}
          options={({route}) => ({
            title: route.params.userName,
          })}
        />
        {/* -------------------------------------------------- */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}else{
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{headerShown: false}}
      >
        {/* Login Screen */}
        {/* <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{title: 'Login'}}
        /> */}
        {/* Signup Screen */}
        {/* <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{title: 'Create Account'}}
        /> */}
        {/* OTP */}
        {/* <Stack.Screen
          name="OTP"
          component={screens.OTP}
          options={{title: 'Confirmation'}}
        /> */}
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Chat App'}}
        />
        {/* Home */}
        <Stack.Screen
          name="ChatScreen"
          component={screens.ChatScreen}
          options={({route}) => ({
            title: route.params.userName,
          })}
        />
        {/* -------------------------------------------------- */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

};

export default StackNavigation;
