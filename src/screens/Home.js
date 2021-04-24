import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.HomeMainCont}>
        <Text style={styles.text}>Hello Home Screen</Text>
        <Button onPress={()=> navigation.navigate('Signup')} title='Go to Sign Up' />
      </View>
    </>
  );
};

export default Home;

// Styles Down Here ...

const styles = StyleSheet.create({
  HomeMainCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});
