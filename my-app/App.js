import React, { useState, } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(false);
  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
