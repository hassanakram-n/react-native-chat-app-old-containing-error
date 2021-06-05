import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import * as Animatable from 'react-native-animatable';
import {firestoreDb} from '../config/firestore';
import firestore from '@react-native-firebase/firestore';
//
import {connect} from 'react-redux';
//
// Login Screen Render Function
const LoginScreen = ({navigation, theme}) => {
  //
  const [disable, setdisable] = useState(false);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [password, setpassword] = useState(null);
  //
  const [userId, setuserId] = useState('3047955183');
  const [userData, setuserData] = useState(null)
  // const [userData, setuserData] = useState(null);

  // // //////
  // const createAccount=()=>{
  //         // navigation.navigate('Drawer')
  //         // alert('Something went wrong',error)
  //         // console.log('create account Something went wrong')
  //         // setdisable(false);
  // }
  // // //////

  //   const signupHandler = () => {
  //     if (mobileNumber && email && password && id !== null) {
  //       setdisable(true);
  //       //
  //       db.collection(radioCheck)
  //         .doc(id)
  //         .set(userData)
  //         .then((snapshots) => {
  //           navigation.navigate('LoginScreen')

  //         })
  //         .catch((error) => console.alert(error));
  //       //
  //     } else {
  //       alert('Please complete all fields.');
  //     }
  //   };
  const loginHandler = async () => {
    if (userId && password) {
    setdisable(true);
    await firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then((documentSnapshot) => {
        console.log('login61 User exists: ', documentSnapshot.exists);
        setdisable(false);
        if (documentSnapshot.exists) {
          setuserData(documentSnapshot.data())
           navigation.replace('Home');
          setdisable(false)
          // console.log('login61 User data: ', documentSnapshot.data());
        }
      });
    // firestore
    //   .collection('users')
    //   .doc(userId)
    //   .get()
    //   .then(data => {
    //     console.log('login61, user firestore data', data);
    //     setdisable(false);
    //   })
    //   .catch((error) => {
    //     console.log('login66, user firestore data', error);
    //     setdisable(false);
    //   });
    } else {
      // show tost here
      console.log('Login71, fill all fields correctly');
    }
  };

  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        {/* <StatusBar backgroundColor="#0f0f0f" barStyle="Light-content" /> */}
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.SignupScreenMainCont}>
          <View style={styles.TitleCont}>
            <Animatable.Image
              animation="zoomIn"
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>Chat App</Text>
          </View>
          <ScrollView contentContainerStyle={styles.container}>
            {/* Mobile Number */}
            <FormInput
              disable={disable}
              labelValue={mobileNumber}
              onChangeText={(name) => setmobileNumber(name)}
              placeholderText="Mobile Number *"
              iconType="mobile1"
              keyboardType="number-pad"
              autoCorrect={false}
            />
            {/* Password */}
            <FormInput
              disable={disable}
              labelValue={password}
              onChangeText={(userPassword) => setpassword(userPassword)}
              placeholderText="Password"
              iconType="lock"
              secureTextEntry={true}
            />
            {/* Sign in button */}
            <FormButton
              isLoading={disable}
              // iconType="edit"
              buttonTitle="Login In"
              onPress={() => loginHandler()}
            />
            {/* create account */}
            <TouchableOpacity
              disable={disable}
              style={styles.navButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.navButtonText}>
                Create an account? Sign Sign Up
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animatable.View>
      </View>
    </>
  );
};
// const mapStateToProps = (state) => ({
// });
export default connect(null, null)(LoginScreen);

const styles = StyleSheet.create({
  SignupScreenMainCont: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TitleCont: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 15,
  },
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    height: 110,
    width: 110,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 24,
    color: '#0f0f0f',
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  hr: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    width: '100%',
    marginVertical: 5,
  },
});
