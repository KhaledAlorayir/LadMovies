import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

//screens
import Favorites from "../screens/Favorites";
import MovieDetails from "../screens/MovieDetails";
import PersonCredits from "../screens/PersonCredits";

const FavStackNav = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
      }}
    >
      <stack.Screen name="Favorites" component={Favorites} />
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

export default FavStackNav;
