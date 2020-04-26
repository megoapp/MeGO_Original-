import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import Firebase from '@react-native-firebase/app';

export default class authScreen extends Component {
  state = {
    confirmResult: this.props.navigation.code,
    verificationCode: this.props.navigation.code,
    userId: '',
  };

  handleSendCode = () => {
    // Request to send OTP
    if (this.validatePhoneNumber()) {
      Firebase.auth()
        .signInWithPhoneNumber(this.state.phone)
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
    // Request for OTP verification
    const {confirmResult, verificationCode} = this.state;
    if (verificationCode.length === 6) {
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          this.setState({userId: user.uid});
          alert(`Verified! ${user.uid}`);
        })
        .catch(error => {
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#333'}]}>
        <View style={styles.page}>
          <View style={styles.verificationView}>
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
              style={[styles.themeButton, {marginTop: 20}]}
              onPress={this.handleVerifyCode}>
              <Text style={styles.themeButtonTitle}>Verify Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 20,
    width: '90%',
    height: 40,
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
  themeButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5,
  },
  themeButtonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});
