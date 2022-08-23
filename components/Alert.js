import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "../utils/tw";
import { FontAwesome } from "@expo/vector-icons";
import { useAlert } from "../Store";

const Alert = ({ children }) => {
  const alert = useAlert((state) => state.alert);
  const clear = useAlert((state) => state.clearAlert);

  return (
    <>
      {alert && (
        <View
          style={tw`${
            alert?.type === 0 ? "bg-rose-700" : "bg-emerald-700"
          } px-2 py-3 flex-row justify-between items-center flex-wrap`}
        >
          <Text style={tw`text-white`}>{alert?.message}</Text>
          <TouchableOpacity onPress={() => clear()}>
            <FontAwesome name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}
      {children}
    </>
  );
};

export default Alert;
