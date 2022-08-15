import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

//screens & navs
import HomeStackNav from "./HomeStackNav";

const mainNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black", borderTopWidth: 0 },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeNav"
          component={HomeStackNav}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="white" />,
            title: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default mainNav;

/*
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white" },
          headerTitle: "LadMovies",
        }}
*/
