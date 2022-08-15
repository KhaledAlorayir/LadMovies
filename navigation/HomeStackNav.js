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
        headerTitle: "LadMovies",
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
        headerBackTitle: "",
      }}
    >
      <stack.Screen name="Home" component={Home} options={{}} />
      <stack.Screen name="More" component={More} />
    </stack.Navigator>
  );
};

export default HomeStackNav;
