import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginBtn from '../Icons/login_icon.svg';
import {useNavigation} from '@react-navigation/native';

class Login extends Component {
  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
  };
  phoneNumber = '';

  user = auth().currentUser;

  if(user) {
    console.log('User id: ', user.uid);
  }

  validatePhoneNumber = () => {
    this.phoneNumber = '+233' + this.state.phone.substring(1);
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(this.phoneNumber);
  };

  handleSendCode = () => {
    // Request to send OTP
    if (this.validatePhoneNumber()) {
      console.log(this.phoneNumber);
      auth()
        .signInWithPhoneNumber(this.phoneNumber)
        .then(confirmResult => {
          this.setState({confirmResult});
        })
        .catch(error => {
          alert(error.message);

          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }

    this.setState({confirmResult: null, verificationCode: ''});
  };
  handleVerifyCode = () => {
    const {navigation} = this.props;
    // Request for OTP verification
    const {confirmResult, verificationCode} = this.state;
    if (verificationCode.length === 6) {
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          this.setState({userId: user.uid});
          navigation.navigate('homeScreen', {code: user.uid});
          console.log(this.props.navigation);
          console.log(user.uid);
        })
        .catch(error => {
          alert('Please enter correct verification code');
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
  };
  renderConfirmationCodeView = () => {
    return (
      <View style={styles.verificationView}>
        <View style={styles.slogan}>
          <Text style={{...styles.normaltext, fontWeight: '400'}}>
            {' '}
            Enter 6-digit OTP code{' \n'} We have sent a code to
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{...styles.numberText}}
            value={this.state.phone}
            placeholder="+233 557119322 "
            onChangeText={phone => this.setState({phone})}
            defaultValue={this.state.phone}
          />
          <Text
            style={{color: 'blue'}}
            onPress={() => this.props.navigation.navigate('Login')}>
            {' '}
            Edit
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Verification code"
          placeholderTextColor="#eee"
          value={this.state.verificationCode}
          keyboardType="numeric"
          onChangeText={verificationCode => {
            this.setState({verificationCode});
          }}
          maxLength={6}
        />
        <TouchableOpacity
          style={styles.themeButton}
          onPress={this.handleVerifyCode}>
          <Text style={styles.themeButtonTitle}>Verify</Text>
        </TouchableOpacity>
        <View style={styles.slogan}>
          <Text style={styles.ResendNotify}>
            {' '}
            {'Resend Code in 60 seconds,\n Did not receive Code ? Resend '}
          </Text>
        </View>
      </View>
    );
  };

  renderPhoneInputView = () => {
    return (
      <View style={styles.verificationView}>
        <View style={styles.header}>
          <Text style={styles.header}> MeGO </Text>
        </View>
        <View style={styles.slogan}>
          <Text style={styles.normaltext}> hello, nice to meet you! </Text>
        </View>
        <View style={styles.slogan}>
          <Text style={styles.slogan}> Get moving with MeGO </Text>
        </View>
        <View style={styles.verificationView}>
          <TextInput
            style={styles.textInput}
            placeholder=" Enter Phone Number"
            placeholderTextColor="#000"
            keyboardType="phone-pad"
            value={this.state.phone}
            onChangeText={phone => {
              this.setState({phone});
            }}
            maxLength={15}
            editable={this.state.confirmResult ? false : true}
          />

          <View style={styles.loginButton}>
            <LoginBtn
              fill={'#000000'}
              backgroundColor={'#000000'}
              width={70}
              height={60}
              onPress={
                this.state.confirmResult
                  ? this.changePhoneNumber
                  : this.handleSendCode
              }
            />
          </View>

          <View style={styles.slogan}>
            <Text style={styles.TCtext}>
              {' '}
              By creating an account, you agree to our{' '}
              <Text style={styles.TC}>Terms of service</Text> and{' '}
              <Text style={styles.TC}>Privacy Policy.</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#fff'}]}>
        <View style={[styles.container, {backgroundColor: '#fff'}]}>
          <View style={styles.page}>
            <View style={styles.logo}>
              <Image
                style={{width: 200, height: 200}}
                source={require('../Icons/logo.png')}
              />
            </View>
            {this.state.confirmResult
              ? this.renderConfirmationCodeView()
              : this.renderPhoneInputView()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default function(props) {
  const navigation = useNavigation();

  return <Login {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  textInput: {
    marginTop: 20,
    marginLeft: 20,
    width: '90%',
    height: 50,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#000',
    fontSize: 16,
  },
  themeButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  themeButtonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  verificationView: {
    width: '100%',
    //alignItems: 'center',
    marginTop: 0,
  },
  ResendNotify: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  slogan: {
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: 'flex-start',
    fontSize: 20,
    //marginBottom: 0,
    fontWeight: 'bold',
  },
  normaltext: {
    paddingLeft: 10,
    fontSize: 20,
    //marginBottom: 10,
  },
  numberText: {
    paddingLeft: 35,
    fontSize: 20,
    color: '#000',
    //marginBottom: 10,
  },
  header: {
    fontSize: 60,
    marginBottom: 5,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: -10,
    //backgroundColor:'#000000',
  },
  TCtext: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  TC: {
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 20,
  },
});
