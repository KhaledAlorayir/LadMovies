import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

//screens & navs
import HomeStackNav from "./HomeStackNav";
import Search from "../screens/Search";
import SearchStackNav from "./SearchStackNav";

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
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={24}
                color={focused ? "white" : "grey"}
              />
            ),
            title: "",
          }}
        />

        <Tab.Screen
          name="SearchNav"
          component={SearchStackNav}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="search"
                size={24}
                color={focused ? "white" : "grey"}
              />
            ),
            tabBarLabel: "",
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
