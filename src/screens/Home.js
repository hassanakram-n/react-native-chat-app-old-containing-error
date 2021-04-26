import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import ChatCard from '../components/ChatCard';
import {realtimeData} from '../config/FirebaseRealtimeDatabase';

const Home = ({navigation}) => {
  const [data, setdata] = useState(null);
  return (
    <>
      <View style={styles.HomeMainCont}>
        <ScrollView>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

// Styles Down Here ...

const styles = StyleSheet.create({
  HomeMainCont: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
