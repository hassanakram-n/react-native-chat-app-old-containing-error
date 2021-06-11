import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import * as Animatable from 'react-native-animatable';
import PhoneInput from '../components/PhoneInput';
import {BottomLongToast, BottomShortToast} from '../components/AndroidToast';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary} from 'react-native-image-picker';
//
import auth from '@react-native-firebase/auth';
// import {db} from '../Config/firestore';

const SignupScreen = ({navigation}) => {
  const [name, setname] = useState(null);
  // const [mobile, setmobileNumber] = useState('+923304382019');
  const [mobile, setmobile] = useState({});
  const [password, setPassword] = useState(null);
  const [p1, setp1] = useState('');
  const [p2, setp2] = useState('');
  const [disable, setdisable] = useState(false);

  const [passwordInputColor, setpasswordInputColor] = useState('#0f0f0f');
  const confrimpasswordHandler = () => {
    if (p1 && p2 && p1 !== p2) {
      setpasswordInputColor('red');
    } else if (p1 && p2 && p1 === p2) {
      setPassword(p1);
      setpasswordInputColor('#0f0f0f');
    } else {
      setpasswordInputColor('#0f0f0f');
    }
  };
  //
  const userData = {
    name: name,
    mobile: mobile,
    password: password,
  };

  // // //////
  // const createAccount=()=>{

  //         // navigation.navigate('Drawer')
  //         // alert('Something went wrong',error)
  //         // console.log('create account Something went wrong')
  //         // setdisable(false);
  // }
  // // //////

  const nextButtonPressHandler = () => {
    // console.log('signup56',auth().currentUser)
    // navigation.navigate('OTP');
    navigation.navigate('OTP', {userData});
    // BottomShortToast('hello')
    // if (name && mobile && password != null) {
    //   setdisable(true);

    // } else {
    //   alert('Please complete all fields correctly.')
    // // BottomShortToast('Please complete all fields correctly.')
    // }
  };
  const userUri = {uri: 'https://avatars.githubusercontent.com/u/72764487?v=4'}
  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.SignupScreenMainCont}>
          <KeyboardAvoidingView style={styles.SignupScreenMainCont}>
            <View style={styles.TitleCont}>
              <View style={styles.imgMainCont}>
                <View style={styles.imgCont}>
                  <Image source={userUri} style={styles.img} />
                  {/* <Entypo name="user" size={40} color="#eae2b7" /> */}
                </View>
                <TouchableOpacity activeOpacity={.85} style={styles.selectImgCont} onPress={()=> console.log('camera is pressed')} 
                >
                  <AntDesign name="camerao" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
              {/* <Animatable.Image
                animation="zoomIn"
                source={require('../assets/logo.png')}
                style={styles.logo}
              />
              <Text style={styles.text}>Chat App</Text> */}
            </View>
            <ScrollView contentContainerStyle={styles.container}>
              {/* Name */}
              <FormInput
                disable={disable}
                labelValue={name}
                onChangeText={(e) => setname(e)}
                placeholderText="Name"
                iconType="user"
                // keyboardType="number-pad"
                autoCorrect={false}
              />
              {/* Mobile */}
              {/* <FormInput
                disable={disable}
                labelValue={mobile}
                onChangeText={(e) => setmobile(e)}
                placeholderText="Mobile Number"
                iconType="mobile1"
                keyboardType="number-pad"
                autoCorrect={false}
              /> */}
              <PhoneInput callBack={setmobile} />
              {/* Password */}
              <FormInput
                inputColor={passwordInputColor}
                disable={disable}
                labelValue={p1}
                onChangeText={(userPassword) => setp1(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                onBlur={() => confrimpasswordHandler()}
              />

              {/* Confirm  Password */}
              <FormInput
                inputColor={passwordInputColor}
                disable={disable}
                labelValue={p2}
                onChangeText={(userPassword) => setp2(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
                onBlur={() => confrimpasswordHandler()}
              />
              {/* Sign up button */}
              <FormButton
                isLoading={disable}
                iconType="edit"
                buttonTitle="Next"
                onPress={() => nextButtonPressHandler()}
              />

              <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                  By registering, you confirm that you accept our
                </Text>
                <TouchableOpacity
                  disabled={disable}
                  onPress={() => BottomShortToast('Terms of service Clicked!')}>
                  <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Terms of service
                  </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                  Privacy Policy
                </Text>
              </View>

              <TouchableOpacity
                disabled={disable}
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>
                  Already Have an account !
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </Animatable.View>
      </View>
    </>
  );
};

export default SignupScreen;

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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    // alignSelf: 'center',
    height: 80,
    width:  80,
    resizeMode: 'cover',
    // paddingBottom: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 24,
    // marginBottom: 10,
    color: '#0f0f0f',
    fontWeight: 'bold',
    // alignSelf: 'flex-start',
  },
  navButton: {
    // marginTop: 5,
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
  imgMainCont: {
    position: 'relative',
    // backgroundColor: 'red',
    // padding:8,
    width: 80,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imgCont: {
    // backgroundColor: 'red',
    padding: 8,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 50,
    // borderColor: '#ccc'
  },
  img: {
    // backgroundColor: 'red',
    width: 80,
    height: 80,
    resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 50,
    // borderColor: '#ccc'
  },
  selectImgCont:{
    position: 'absolute',
    bottom: 0,
    right: -2,
    backgroundColor: '#f8c301',
    padding: 6,
    borderRadius: 50,

    
  }
});
