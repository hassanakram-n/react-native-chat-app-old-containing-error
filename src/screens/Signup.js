import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import RadioButton from '../components/RadioButton';
//
// import {db} from '../Config/firestore';

const SignupScreen = ({navigation}) => {
  const [radioCheck, setradioCheck] = useState('student');
  const [disable, setdisable] = useState(false);
  const [fullName, setfullName] = useState();
  const [email, setEmail] = useState();
  const [id, setid] = useState('001');
  const [password, setPassword] = useState();
  const [p1, setp1] = useState('');
  const [p2, setp2] = useState('');

  const [passwordInputColor, setpasswordInputColor] = useState('#0f0f0f');
  // password !== confirmPassword ? 'red' : '#0f0f0f';
  const confrimpasswordHandler = () => {
    if (p1 !== p2) {
      setpasswordInputColor('red');
    } else {
      setPassword(p1);
      setpasswordInputColor('#0f0f0f');
    }
  };

  const idPrefix = radioCheck === 'student' ? 's' : 'c';
  //
  const userData = {
    name: fullName,
    email: email,
    id: id,
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

  //   const signupHandler = () => {
  //     if (fullName && email && password && id !== null) {
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
  return (
    <>
    <View style={styles.SignupScreenMainCont}>
      <View style={styles.TitleCont}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Chat App</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ---------------------- Student Section --------------------- */}

        {/* Name */}
        <FormInput
          disable={disable}
          labelValue={fullName}
          onChangeText={(name) => setfullName(name)}
          placeholderText="Mobile Number *"
          iconType="mobile1"
          keyboardType="number-pad"
          autoCorrect={false}
        />
        {/* Email */}
        <FormInput
          disable={disable}
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email Adress *"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Student ID */}
        {/* <FormInput
        disable={disable}
        labelValue={id}
        onChangeText={(userid) => setid(userid)}
        placeholderText={`${radioCheck} id`}
        iconType="idcard"
        autoCorrect={false}
        onBlur={() => setid(`${idPrefix}${id}`)}
      /> */}

        {/* !!!-------------------Student Section ------------------!!! */}

        {/* Password */}
        <FormInput
          inputColor={passwordInputColor}
          disable={disable}
          labelValue={p1}
          onChangeText={(userPassword) => setp1(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        {/* Confrim  Password */}
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
          buttonTitle="Sign Up"
          // onPress={() => signupHandler()}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
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
          disable={disable}
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  SignupScreenMainCont:{
    flex: 1,
    backgroundColor: '#fff'
  },
  TitleCont:{
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
    alignSelf: 'center',
    height: 110,
    width: 110,
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
});
