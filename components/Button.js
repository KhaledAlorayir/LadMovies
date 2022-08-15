import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "../utils/tw";

const Button = ({ children, style }) => {
  return (
    <TouchableOpacity>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
