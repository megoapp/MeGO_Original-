/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
import Auth from './src/screens/auth';
import HomeScreen from './src/screens/home';
import RiderList from './src/components/riderList';
import Splash from './src/screens/splash';
import Full from './src/components/bottomNavigator';


AppRegistry.registerComponent(appName, () => Login);
