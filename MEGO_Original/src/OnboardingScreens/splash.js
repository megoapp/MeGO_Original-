import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {MainTabNavigator} from '../Navigation/appNavigator';
import Login from '../OnboardingScreens/Login';

export default function SplashScreen() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged() {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    console.log(user);
  }

  auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      // Send token to your backend via HTTPS
      // ...
    })
    .catch(function(error) {
      // Handle error
    });
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  if (!user) {
    console.log(user);
    return <Login />;
  } else {
    return <MainTabNavigator />;
  }
}
