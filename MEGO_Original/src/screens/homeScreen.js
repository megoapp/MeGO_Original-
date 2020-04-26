// // import React from 'react-native';
// // import {createStackNavigator} from '@react-navigation/stack';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import {Icon} from 'react-native-elements';
// // import {StyleSheet} from 'react-native';

// import * as React from 'react';
// import {View, Text, Dimensions, Image, ActivityIndicator} from 'react-native';
// import {TouchableOpacity} from 'react-native';
// import {KeyboardAvoidingView} from 'react-native';
// import {TextInput} from 'react-native';
// //import {NavigationContainer} from '@react-navigation/native';
// //import {createStackNavigator} from '@react-navigation/stack';
// import {StyleSheet} from 'react-native';

// const {height} = Dimensions.get('window');

// function Auth({navigation}) {
//   return (
//     <View style={styles.mainview}>
//       <View style={styles.logo}>
//         <Image
//           style={{width: 200, height: 200}}
//           source={require('../Icons/logo.png')}
//         />
//       </View>
//       <KeyboardAvoidingView behavior="padding">
//         <View style={{justifyContent: 'flex-start'}}>
//           <View style={styles.slogan}>
//             <Text style={{...styles.normaltext, fontWeight: '400'}}>
//               {' '}
//               Enter 6-digit OTP code{' \n'} We have sent a code to
//             </Text>
//           </View>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Text
//             style={{...styles.numberText}}
//             placeholder="+233 557119322 "
//             onChangeText={userPhoneNumber => this.getState({userPhoneNumber})}>
//             +233 55 711 9322{' '}
//           </Text>
//           <Text
//             style={{color: 'blue'}}
//             onPress={() => navigation.navigate('Login')}>
//             {' '}
//             Edit
//           </Text>
//         </View>
//         <View style={{paddingTop: 50, paddingBottom: 50}}>
//           <View style={{...styles.Shadower}}>
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//             <TextInput
//               style={styles.textInput}
//               placeholder="-"
//               onChangeText={otpCode => this.setState({otpCode})}
//             />
//           </View>
//           <View style={{paddingTop: 60}}>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={() => navigation.navigate('homeScreen')}>
//               <Text style={styles.slogan}>Done</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.slogan}>
//             <Text style={styles.ResendNotify}>
//               {' '}
//               {'Resend Code in 60 seconds,\n Did not receive Code ? Resend '}
//             </Text>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
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
//   logo: {
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     paddingTop: 80,
//     paddingBottom: 30,
//   },
//   backgroundimage: {
//     width: 500,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     flex: 1,
//     backgroundColor: '#000000',
//   },
//   header: {
//     fontSize: 60,
//     marginBottom: 40,
//     color: '#000000',
//     fontWeight: 'bold',
//     alignItems: 'center',
//     //backgroundColor:'#000000',
//   },

//   slogan: {
//     paddingTop: 10,
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
//     alignSelf: 'center',
//     //flex: 1,
//     height: 60,
//     width: 60,
//     fontSize: 35,
//     //marginHorizontal: 20,
//     padding: 20,
//     marginTop: 20,
//     marginBottom: 20,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   btn: {
//     //alignSelf: 'stretch',
//     backgroundColor: '#fff',
//     height: 50,
//     marginHorizontal: 50,
//     borderRadius: 15,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 1,
//     // },
//     // shadowOpacity: 0.17,
//     // shadowRadius: 2.65,

//     // elevation: 2,
//     // shadowColor: '#000',
//   },
//   Shadower: {
//     shadowColor: '#000',
//     flexDirection: 'row',
//     paddingLeft: 5,
//     paddingRight: 5,
//     justifyContent: 'space-around',
//     flex: 1,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.17,
//     shadowRadius: 2.65,

//     elevation: 2,
//   },
//   normaltext: {
//     paddingLeft: 20,
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   numberText: {
//     paddingLeft: 35,
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   TCtext: {
//     paddingLeft: 10,
//     paddingTop: 40,
//   },
//   ResendNotify: {
//     paddingTop: 10,
//     paddingLeft: 20,
//   },
// });

// export default Auth;

