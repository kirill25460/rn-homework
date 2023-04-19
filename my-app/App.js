import React, { useState, } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistartionScreen';

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
    <LoginScreen />
    {/* { <RegistrationScreen /> } */}
    </>
 );
}
