import React from "react";
import { View, ActivityIndicator } from "react-native";
import tw from "../utils/tw";

const LoadingScreen = () => {
  return (
    <View style={tw`bg-black flex-1 justify-center items-center`}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default LoadingScreen;
