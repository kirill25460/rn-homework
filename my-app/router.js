import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

import PostsScreen from "./Screens/mainScreen/PostScreen";

import CreateScreen from "./Screens/mainScreen/CreatePostsScreen";

import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

import LoginScreen from "./Screens/auth/LoginScreen";

import RegisterScreen from "./Screens/auth/RegistartionScreen";

// icons import

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  MaterialIcons,
  Octicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />

        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegisterScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        headerTitleAlign: "center",

        headerTitleStyle: {
          color: "#212121",

          fontFamily: "Roboto-Medium",

          fontSize: 18,

          lineHeight: 22,

          letterSpacing: 0.5,

          paddingLeft: 15,

          paddingRight: 15,
        },
      }}
    >
      {/* <MaterialIcons name="logout" size={24} color="black" />  */}

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),

          headerRight: () => (
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          ),
        }}
        name="Публикации"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
        name="Создать публикацию"
        component={CreateScreen}
      />

      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons name="person" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
        name="Профиль"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
