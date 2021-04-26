import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image, Pressable} from 'react-native';
import {realtimeData} from '../config/FirebaseRealtimeDatabase';

const ChatCard = ({navigation}) => {
  const [data, setdata] = useState(null);
  return (
    <>
      <View style={styles.ChatCardMainCont}>
        <Pressable style={styles.ChatCardCont} onPress={()=> console.log('pressed')}>
          <Image
            source={require('../assets/profile.jpg')}
            style={styles.Chat_profileImg}
          />
          <Text style={styles.Chat_profileTitle}> User Display Name</Text>
        </Pressable>

        <View></View>
      </View>
    </>
  );
};

export default ChatCard;

// Styles Down Here ...

const styles = StyleSheet.create({
  ChatCardMainCont: {
    // flex: 1,
    width: '100%',
    // backgroundColor: '#ededed',
    paddingHorizontal: 10,
    paddingVertical: 5,
},
ChatCardCont:{
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderRadius: 50,
  },
  Chat_profileImg: {
    // alignSelf: 'center',
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderRadius: 50,
    // paddingBottom: 10,
    // marginBottom: 10,
  },
  Chat_profileTitle:{
      fontSize: 18,
      marginTop: 5,
      marginHorizontal: 15,
  },
});
