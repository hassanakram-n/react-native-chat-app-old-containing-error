import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { StyleSheet, View, Text, Button, ScrollView, FlatList } from 'react-native';
import ChatCard from '../components/ChatCard';
import { realtimeData } from '../config/FirebaseRealtimeDatabase';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageScreen'
import Menu from '../components/Menu'


const Home = ({ navigation }) => {
  const [data, setdata] = useState(null);
  // messages data
  const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      messageTime: '4 mins ago',
      userImg: { uri: 'https://bit.ly/3tr5k1f' },
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: { uri: 'https://bit.ly/3tr5k1f' },
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: { uri: 'https://bit.ly/3tr5k1f' },
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: { uri: 'https://bit.ly/3tr5k1f' },
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: { uri: 'https://bit.ly/3tr5k1f' },
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];
  // 
console.log(auth().currentUser)
  return (
    <>
      <Container>
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card onPress={() => navigation.navigate('ChatScreen', { userName: item.userName })}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    </>
  );
};

export default Home;

// Styles Down Here ...

// const styles = StyleSheet.create({
//   HomeMainCont: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: '#fff',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });
