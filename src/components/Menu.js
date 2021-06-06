import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import auth from '@react-native-firebase/auth';
//

const MyMenu = ({navigation}) => {
  return (
    <>
      <Menu style={styles.MenuContainer}>
        <MenuTrigger>
          <MaterialCommunityIcons name="dots-vertical" color="#000" size={25} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => {
              auth().signOut();
              // navigation.replace('AuthStack');
            }}
            text="Log out"
          />
          <MenuOption onSelect={()=> console.log('Home71, current user =>',auth().currentUser.phoneNumber)}>
            <Text style={{color: 'red'}}>Check user data in console</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
    </>
  );
};

export default MyMenu;

const styles = StyleSheet.create({
  MenuContainer: {
    marginRight: 10,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
});
