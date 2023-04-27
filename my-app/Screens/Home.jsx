import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Image } from "react-native";
import { useContext, useEffect } from "react";
import { Context } from "../context";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { authSignOutUser } from "../redux/auth/authOperations";

//screens
// import {CreateScreen} from "../Screens/mainScreen/CreatePostsScreen";
// import {PostsScreen} from "../Screens/mainScreen/PostScreen";
// import {ProfileScreen} from "../Screens/mainScreen/ProfileScreen";
import screens from "../Screens";
const {CreateScreen,PostsScreen, ProfileScreen} = screens;

//icons

const backIcon = require("../assets/icon/arrow-left.png");
const LogOutIcon = require("../assets/icon/log-out.png");

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { currentPath } = useContext(Context);

  return (
    <MainTab.Navigator
      // tabBarOptions={{
      //   keyboardHidesTabBar: true,
      // }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        // syyle={{ display: "none" }}
        name="PostsScreen"
        options={{
          tabBarStyle:
            currentPath !== null ? { display: "none" } : { display: "flex" },
          tabBarVisible: currentPath !== null ? false : true,
          headerShown: currentPath !== null ? false : true,
          tabBarVisible: false,
          title: "Публикации",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24}
            color={focused ? "rgba(255, 108, 0, 1)" : color} />
            // <MaterialIcons
            //   name="view-list"
            //   size={focused ? 44 : 34}
            //   color={focused ? "orange" : color}
            // />
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => dispatch(authSignOutUser())}
            >
              <Image source={LogOutIcon} style={{ marginRight: 16 }} />
            </TouchableOpacity>
          ),
        }}
        component={PostsScreen}
      />
      <MainTab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarVisible: false,
          title: "Создать публикацию",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="add-circle"
              size={focused ? 44 : 34}
              color={focused ? "rgba(255, 108, 0, 1)" : color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Image source={backIcon} style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarVisible: true,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="account-circle"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}