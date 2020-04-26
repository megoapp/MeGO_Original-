import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View>
          <MOTO />
        </View> */}
        <View style={{justifyContent: 'center'}}>
          <View style={{backgroundColor: '#fff'}}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../icons/logo.png')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.logoText}>MeGO</Text>
          </View>
          <ActivityIndicator style={{size: 'large'}} />
        </View>
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>Powered by brosanim LLC</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200,
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 50,
    fontWeight: '800',
    paddingTop: 20,
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
});
