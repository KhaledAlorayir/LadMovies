import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

//screens
import Home from "../screens/Home";
import More from "../screens/More";

const HomeStackNav = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
      }}
    >
      <stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "LadMovies" }}
      />
      <stack.Screen
        name="More"
        component={More}
        options={{ headerBackTitle: "" }}
      />
    </stack.Navigator>
  );
};

export default HomeStackNav;
