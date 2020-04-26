// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Splash from '../screens/splash';

const Stack = createStackNavigator();

function appNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute={'Splash'}
        screenOptions={{
          headerTintColor: '#000000',
          headerStyle: {backgroundColor: '#ffffff'},
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default appNavigator;
