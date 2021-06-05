import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../assets/Dimensions';
import IntlPhoneInput from 'react-native-intl-phone-input';

const PhoneInput = ({callBack}) => {
  const onChangeText = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    // isVerified,
  }) => {
    callBack({
      dialCode: dialCode,
      number: unmaskedPhoneNumber,
      mobileNumber: `${dialCode}${phoneNumber}`,
    });
  };
  //
  return (
    <View style={styles.inputContainer}>
      <IntlPhoneInput
        onChangeText={(text) => onChangeText(text)}
        defaultCountry="PK"
        phoneInputStyle={styles.input}
        containerStyle={styles.inputCont}
        flagStyle={styles.iconStyle}
        placeholder="Mobile Number"
      />
      <Text style={{color: 'red', marginHorizontal: 5}}>*</Text>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputCont: {
    width: windowWidth / 1.2,
    height: windowHeight / 16,
    borderColor: '#ccc',
  },
  iconStyle: {
    height: windowHeight / 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 40,
    fontSize: 25,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});