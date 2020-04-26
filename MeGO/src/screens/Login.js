import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import navigation from '@react-navigation/stack';

export default class Login extends Component {
  state = {
    phoneNumber: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
  };

  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(this.state.phone);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View>
          <MOTO />
        </View> */}
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
            <Text style={styles.normaltext}> hello, nice to meet you! </Text>
          </View>
          <View style={styles.slogan}>
            <Text style={styles.slogan}> Get moving with MeGO </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 25}}>
              <Image
                style={{width: 50, height: 40, paddingTop: 50}}
                source={require('../icons/ghana.png')}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter mobile Number"
                value={this.state.phone}
                onChangeText={phone => {
                  this.setState({phone});
                }}
                maxLength={13}
                editable={this.state.confirmResult ? false : true}
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', paddingRight: 15}}>
          <TouchableHighlight onPress={() => navigation.navigate('auth')}>
            <Image
              style={{width: 60, height: 61}}
              source={require('../icons/login_arrow.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={(styles.slogan, {paddingLeft: 20})}>
          <Text style={styles.TCtext}>
            By creating an account, you agree to our{'\n'}
            <Text style={(styles.TC, {color: 'blue'})}>
              Terms of service
            </Text>{' '}
            and
            <Text style={(styles.TC, {color: 'blue'})}> Privacy Policy.</Text>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200,
    backgroundColor: '#FFF',
  },
  logo: {
    backgroundColor: '#FFF',
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
    //flex: 3,
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
    fontWeight: 'bold',
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
    width: 300,
    marginHorizontal: 15,
    padding: 5,
    fontSize: 23,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
});
