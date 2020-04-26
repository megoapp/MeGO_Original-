import React from 'react';
import AppNavigator from './src/Navigation/appNavigator';
import SplashScreen from './src/OnboardingScreens/splash';
import {Provider} from 'react-redux';
import store from './src/APIS/store';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
