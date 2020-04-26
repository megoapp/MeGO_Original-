// import React, {useState, Component} from 'react';
// import {View, Text, Image, BackgroundImage} from 'react-native';
// import {KeyboardAvoidingView} from 'react-native';
// import {TextInput} from 'react-native';
// import {StyleSheet} from 'react-native';
// import LoginBtn from '../Icons/login_icon.svg';
// import {Fonts} from '../utils/fonts';
// import {Firebase} from '@react-native-firebase/auth';

// export default class PhoneAuthScreen extends Component {
//   state = {
//     phone: '',
//     confirmResult: null,
//     verificationCode: '',
//     userId: '',
//   };

//   validatePhoneNumber = () => {
//     var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
//     return regexp.test(this.state.phone);
//   };

//   handleSendCode = () => {
//     // Request to send OTP
//     if (this.validatePhoneNumber()) {
//       Firebase.auth()
//         .signInWithPhoneNumber(this.state.phone)
//         .then(confirmResult => {
//           this.setState({confirmResult});
//         })
//         .catch(error => {
//           alert(error.message);

//           console.log(error);
//         });
//     } else {
//       alert('Invalid Phone Number');
//     }
//     this.setState({confirmResult: null, verificationCode: ''});
//   };

//   handleVerifyCode = () => {
//     // Request for OTP verification
//     const {confirmResult, verificationCode} = this.state;
//     if (verificationCode.length === 6) {
//       confirmResult
//         .confirm(verificationCode)
//         .then(user => {
//           this.setState({userId: user.uid});
//           alert(`Verified! ${user.uid}`, navigation.navigate('authScreen'));
//         })
//         .catch(error => {
//           alert(error.message);
//           console.log(error);
//         });
//     } else {
//       alert('Please enter a 6 digit OTP code.');
//     }
//   };

//   render() {
//     return (
//       <View style={styles.mainview}>
//         <View style={styles.logo}>
//           <Image
//             style={{width: 200, height: 200}}
//             source={require('../Icons/logo.png')}
//           />
//         </View>

//         <KeyboardAvoidingView behavior="padding">
//           <View style={styles.header}>
//             <Text style={styles.header}> MeGO </Text>
//           </View>
//           <View style={styles.slogan}>
//             <Text style={styles.normaltext}> hello, nice to meet you! </Text>
//           </View>
//           <View style={styles.slogan}>
//             <Text style={styles.slogan}> Get moving with MeGO </Text>
//           </View>
//           <View style={styles.SectionStyle}>
//             <Image
//               style={styles.imageSt}
//               source={require('../Icons/ghana.png')}
//             />

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="Enter mobile Number"
//               value={this.state.phone}
//               onChangeText={() => {
//                 this.setState({phone});
//               }}
//               maxLength={13}
//               editable={confirmResult ? false : true}
//             />
//           </View>
//           <View style={styles.loginButton}>
//             <LoginBtn
//               fill={'#000000'}
//               backgroundColor={'#000000'}
//               width={50}
//               height={50}
//               onPress={
//               this.state.confirmResult
//                 ? this.changePhoneNumber
//                 : this.handleSendCode
//             }
//             />
//           </View>

//           <View style={styles.slogan}>
//             <Text style={styles.TCtext}>
//               {' '}
//               By creating an account, you agree to our{' '}
//               <Text style={styles.TC}>Terms of service</Text> and{' '}
//               <Text style={styles.TC}>Privacy Policy.</Text>
//             </Text>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//   },
//   mainview: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   container: {
//     flex: 1,
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingBottom: 30,
//   },
//   backgroundimage: {
//     width: '50%',
//     height: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     flex: 1,
//     //backgroundColor: '#000000',
//   },
//   header: {
//     fontSize: 60,
//     marginBottom: 20,
//     color: '#000000',
//     fontWeight: 'bold',
//     alignItems: 'center',
//     //backgroundColor:'#000000',
//   },

//   phoneInput: {
//     flex: 1,
//     paddingLeft: 20,
//     fontSize: 20,
//   },

//   imageSt: {
//     width: 50,
//     height: 40,
//     paddingTop: 50,
//   },
//   slogan: {
//     paddingLeft: 10,
//     alignItems: 'flex-start',
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   TC: {
//     fontWeight: 'bold',
//   },
//   textInput: {
//     alignSelf: 'stretch',
//     height: 40,
//     marginHorizontal: 20,
//     fontFamily: Fonts.AvenirBook,
//     padding: 20,
//     fontSize: 30,
//     marginBottom: 20,
//     borderRadius: 15,
//     backgroundColor: '#ffffff',
//   },
//   btn: {
//     //alignSelf: 'stretch',
//     backgroundColor: '#ffffff',
//     height: 70,
//     marginHorizontal: 20,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     paddingRight: 10,
//   },

//   logo: {
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     paddingTop: 80,
//   },

//   Logo: {
//     paddingTop: 150,
//     alignItems: 'center',
//   },

//   Shadower: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.17,
//     shadowRadius: 4.65,

//     elevation: 4,
//   },
//   normaltext: {
//     paddingLeft: 10,
//   },
//   TCtext: {
//     paddingLeft: 10,
//     paddingTop: 40,
//   },
//   loginButton: {
//     alignItems: 'flex-end',
//     paddingRight: 20,
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'stretch',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#000',
//     height: 60,
//     width: 370,
//     paddingLeft: 20,
//     paddingTop: 5,
//     borderRadius: 5,
//     margin: 20,
//     marginLeft: 25,
//   },
// });

