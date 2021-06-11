import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import ChatCard from '../components/ChatCard';
import {realtimeData} from '../config/FirebaseRealtimeDatabase';
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
} from '../styles/MessageScreen';
import Menu from '../components/Menu';

const Home = ({navigation}) => {
  const [data, setdata] = useState(null);
  // messages data
  const Messages = [
    {
      id: '3047955183',
      userName: 'hassan akram',
      // messageTime: '4 mins ago',
      userImg: {uri: 'https://avatars.githubusercontent.com/u/72764487?v=4'},
      messageText: 'god is great',
    },
    {
      id: '3094300951',
      userName: 'ahtesham akram',
      userImg: {uri: 'https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/84549591_178028770132150_8306437845334097920_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHPLLdP5PmnkPgFwTScS1XPDTyghsk5TicNPKCGyTlOJ1Yf6wC4CTBEC_Pyp3JLshDV79ZpO5qG_rjclAtWM9Br&_nc_ohc=s0ccuVDLW34AX_PoBws&_nc_ht=scontent.flhe7-1.fna&oh=dfb6480ed460f3d84bcca9a171f9b5f1&oe=60C80F81'},
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: {uri: 'https://bit.ly/3tr5k1f'},
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: {uri: 'https://bit.ly/3tr5k1f'},
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: {uri: 'https://bit.ly/3tr5k1f'},
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];
  //
  const toCapitalize = (string)=>{
   return string.charAt(0).toUpperCase() + string.slice(1)
  }
  // console.log(auth().currentUser);
  return (
    <>
      <Container>
        <FlatList
          data={Messages}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Card
              onPress={() =>
                navigation.navigate('ChatScreen', {userName: toCapitalize(item.userName)})
              }>
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
