import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import navigation from '@react-navigation/stack';

export default class Auth extends Component {
  state = {
    phoneNumber: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.logo}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../icons/logo.png')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.logoText}>MeGO</Text>
          </View>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <View style={styles.slogan}>
            <Text style={styles.normaltext}> Enter 6-digit OTP code </Text>
          </View>
          <View
            style={(styles.slogan, {flexDirection: 'row', paddingLeft: 10})}>
            <Text style={styles.slogan}> +233 244 82 8604 </Text>
            <Text style={{color: 'blue'}}> Edit</Text>
          </View>

          <View style={{...styles.Shadower, paddingTop: -50}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TextInput
                style={styles.textInputButton}
                placeholder="     -  -  -    "
                onChangeText={otpCode => this.setState({otpCode})}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-end', paddingRight: 20}}>
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
              <Image
                style={{width: 60, height: 61}}
                source={require('../icons/login_arrow.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={(styles.slogan, {paddingLeft: 20})}>
          <Text style={styles.TCtext}>
            Resend Code in
            <Text style={styles.TC}> 10 seconds{'\n'}</Text>Didn't receive OTP ?
            <Text style={(styles.TC, {color: 'red'})}> Resend</Text>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -200,
    backgroundColor: '#FFF',
  },
  logo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 300,
  },
  logoText: {
    fontSize: 50,
    fontWeight: '800',
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  copyrightText: {
    fontSize: 10,
  },
  copyright: {
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 40,
  },
  slogan: {
    paddingLeft: 10,
    alignItems: 'flex-start',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '400',
  },
  normaltext: {
    paddingLeft: 10,
  },
  TC: {
    fontWeight: 'bold',
  },
  Shadower: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,

    elevation: 4,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 60,
    marginHorizontal: 15,
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  textInputButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 60,
    width: 150,
    fontSize: 25,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
