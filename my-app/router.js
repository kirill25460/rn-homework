import { createStackNavigator } from "@react-navigation/stack";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { MaterialIcons } from "@expo/vector-icons";
// import { Button, TouchableOpacity, Image } from "react-native";

import Home from "./Screens/Home";
import  LoginScreen  from "./Screens/auth/LoginScreen";
import   RegistrationScreen  from "./Screens/auth/RegistartionScreen";


const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Auth">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <DashboardStack.Navigator initialRouteName="Auth">
      <DashboardStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </DashboardStack.Navigator>
  );
};

export default useRoute;