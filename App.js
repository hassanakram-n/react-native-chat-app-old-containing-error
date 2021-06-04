import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import store from './src/redux/store';
//
import StackNavigation from './src/navigations/Navigation';
import SignupScreen from './src/screens/Signup';
//

const App = () => {
  return (
    <>
      <Provider store={store}>
        <View style={styles.AppMainContainer}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <StackNavigation />
        </View>
      </Provider>
    </>
  );
};
// const mapStateToProps = (state) => ({
//   // theme: state.settings.theme
// });

// export default connect(mapStateToProps, null)(App);
export default App;

const styles = StyleSheet.create({
  AppMainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
