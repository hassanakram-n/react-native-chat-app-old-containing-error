import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import StackNavigation from './src/navigations/Stack';
import SignupScreen from './src/screens/Signup';

const App = () => {
  return (
    <>
      <View style={styles.AppMainContainer}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <StackNavigation />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  AppMainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 0,
    margin: 0,
  },
});

export default App;
