// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import Login from '../OnboardingScreens/Login';
import authScreen from '../OnboardingScreens/auth';
import homeScreen from '../screens/homeScreen';
import SplashScreen from '../OnboardingScreens/splash';
import Feedback from '../bottomTab/feedback';
import Account from '../bottomTab/Account';
import HistoryTab from '../bottomTab/history';
import AccountBtn from '../Icons/Icon material-account-circle.svg';
import CustomerData from '../UserData/KYC';
import RiderFormScreen from '../UserData/RiderFormScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Accounte';

  switch (routeName) {
    case 'History':
      return 'History';
    case 'Account':
      return 'Account';
    case 'Feedback':
      return 'Feedback';
  }
}

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'Account') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Feedback') {
            iconName = focused ? 'feedback' : 'feedback';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="History" component={HistoryTab} />
      <Tab.Screen name="Account" component={Account} title="Home" />
      <Tab.Screen name="Feedback" component={Feedback} />
    </Tab.Navigator>
  );
}

function appNavigator() {
  return (
    <NavigationContainer
      navigationOptions={{
        transparentHeader: {
          borderRadius: 0,
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          title: 'MeGO',
          headerTintColor: '#000000',
          headerStyle: {backgroundColor: '#ffffff'},
          gestureEnabled: true,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerLeft: null}}
        />
        <Stack.Screen
          name="authScreen"
          component={authScreen}
          options={{
            title: 'Verification',
          }}
        />
        <Stack.Screen
          name="homeScreen"
          component={MainTabNavigator}
          options={({navigation, route}) => ({
            headerRight: props => (
              <AccountBtn
                fill={'#000'}
                backgroundColor={'#000'}
                width={30}
                height={30}
                onPress={() => {
                  console.log(route);
                  navigation.navigate('RiderForm');
                }}
                style={Styles.topRightButton}
              />
            ),
            headerTitle: getHeaderTitle(route),
            headerLeft: null,
            gestureEnabled: 'false',
          })}
        />
        <Stack.Screen
          name="KYC"
          component={CustomerData}
          options={{
            title: 'Verification',
          }}
        />
        <Stack.Screen
          name="RiderForm"
          component={RiderFormScreen}
          options={{
            title: 'Rider Form',
          }}
        />
        {/* <Stack.Screen name="Tabs" component={homeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default appNavigator;

const Styles = StyleSheet.create({
  topRightButton: {
    marginRight: 15,
  },
});
