import React, { useState, useCallback } from "react";

import { View } from "react-native";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import { AppLoading } from "expo";

import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

import { store } from "./redux/store";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase/config";

// const loadApplication = async () => {

//   await Font.loadAsync({

//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),

//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),

//   });

// };

export default function App() {
  const [iasReady, setIasReady] = useState(false);

  const [user, setUser] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),

    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onAuthStateChanged(auth, (user) => setUser(user));

  const routing = useRoute(false);

  // const routing = useRoute(user);

  if (!iasReady) {
    // return (
    //   <AppLoading
    //     startAsync={loadApplication}
    //     onFinish={() => setIasReady(true)}
    //     onError={console.warn}
    //   />
    // );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
      onLayout={onLayoutRootView}
    >
      <Provider store={store}>
        <NavigationContainer>{routing}</NavigationContainer>
      </Provider>
    </View>
  );
}
