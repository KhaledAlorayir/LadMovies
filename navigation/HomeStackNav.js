import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

//screens
import Home from "../screens/Home";
import More from "../screens/More";
import MovieDetails from "../screens/MovieDetails";
import PersonCredits from "../screens/PersonCredits";

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
      <stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerBackTitle: "" }}
      />
      <stack.Screen
        name="Credits"
        component={PersonCredits}
        options={{ headerBackTitle: "" }}
      />
    </stack.Navigator>
  );
};

export default HomeStackNav;
