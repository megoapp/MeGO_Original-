import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import navigation from '@react-navigation/stack';
//import RidersList from '../components/riderList';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainview}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              title="Okada"
              type="outline"
              onPress={() => {
                navigation.navigate('Login', {
                  itemId: 86,
                });
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Delivery"
              type="outline"
              onPress={() => {
                navigation.navigate('Login', {
                  itemId: 40,
                });
              }}
            />
          </View>
        </View>
        <View>{/* <RidersList /> */}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 30,
  },
});
