import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {realtimeData} from '../config/FirebaseRealtimeDatabase'

const Home = ({navigation}) => {

  const [data, setdata] = useState(null)
  return (
    <>
      <View style={styles.HomeMainCont}>
        <Text style={styles.text}>Hello Home Screen</Text>
        <Button
          onPress={() => navigation.navigate('Signup')}
          title="Go to Sign Up"
        />
        <Button onPress={() => realtimeData('/name', setdata)} title="firebase data" />
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
