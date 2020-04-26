// import * as React from 'react';
// // import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {StyleSheet, View, Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// class History extends React.Component() {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>History</Text>
//       </View>
//     );
//   }
// }
// class Account extends React.Component() {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Account</Text>
//       </View>
//     );
//   }
// }
// class Feedback extends React.Component() {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Feedback</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// const Tabs = createBottomTabNavigator();

// export default class Full extends React.Component() {
//   render() {
//     return (
//       <NavigationContainer>
//         <Tabs.Navigator>
//           <Tabs.Screen name="History" Component={History} />
//           <Tabs.Screen name="Account" Component={Account} />
//           <Tabs.Screen name="Feedback" Component={Feedback} />
//         </Tabs.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
