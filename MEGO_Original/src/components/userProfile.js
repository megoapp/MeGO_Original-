import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export function UserProfile({navigation}) {
  const [userName, setuserName] = useState('Kwaku Manu');
  const [userEmail, setuserEmail] = useState('kwakumanu@gmail.com');
  const [userPhoneNumber, setuserPhoneNumber] = useState('0557119322');
  const [firstName, setfirstname] = useState('Kwaku Manu');
  return (
    <ScrollView style={Styles.screenContainer}>
      <View style={Styles.viewAlignment}>
        <Text style={Styles.labelText}> </Text>
      </View>
      <View style={Styles.viewAlignment}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../Images/Addo.jpeg')}
            style={Styles.imageContainer}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.viewAlignment}>
        <Text style={Styles.riderName}>{userName}</Text>
        <Text style={Styles.riderLabel}> {userEmail}</Text>
      </View>
      <View
        style={Styles.profileViewAlignment}>
        <Text style={Styles.phoneLabelText}>{firstName}</Text>
        <Text style={Styles.labelText}>Edit Profile</Text>
      </View>
      <View
        style={Styles.profileViewAlignment}>
        <Text style={Styles.phoneLabelText}>{userPhoneNumber}</Text>
        <Text style={Styles.labelText}> change</Text>
      </View>
      <View style={Styles.viewAlignment}>
        <TouchableOpacity
          style={Styles.submitButton}
          // onPress={navigation.navigate('Login')}
        >
          <Text style={Styles.submitText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  viewAlignment: {
    alignItems: 'center',
  },

  profileViewAlignment: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 100,
  },

  labelText: {
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 20,
    marginTop: 30,
    color: '#f98023',
    paddingLeft : 10,
  },
  phoneLabelText: {
    fontWeight: '400',
    marginBottom: 20,
    marginTop: 30,
    fontSize: 25,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  riderName: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
  },
  riderLabel: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
  },

  submitButton: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    height: 45,
    width: 250,
  },

  submitText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 25,
  },
});
