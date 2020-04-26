import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import Splash from './src/screens/splash';
import AuthScreen from './src/screens/auth';
import HomeScreen from './src/screens/home';
import But from './src/components/bottomNavigator';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRoute={'Splash'}
          screenOptions={{
            headerTintColor: '#000000',
            headerStyle: {backgroundColor: '#ffffff'},
          }}>
          <Stack.Screen
            name="MEGO"
            component={Splash}
            options={{
              headerLeft: null,
              headerTitle: null,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login', headerLeft: null}}
          />
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{title: 'Verify'}}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: 'MeGO',
              headerLeft: null,
              gesturesEnabled: 'false',
            }}
          />
          <Stack.Screen name="Tab" component={But} options={{title: 'Tab'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
