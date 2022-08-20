import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import tw from "../utils/tw";
import { getImg } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";

const CastMember = ({ item, role }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("Credits", { pid: item.id, name: item.name, role });
      }}
    >
      <View style={tw` mr-8`}>
        <View
          style={[
            {
              height: Dimensions.get("window").height / 8,
              width: Dimensions.get("window").width / 4,
            },
            tw`rounded-full overflow-hidden`,
          ]}
        >
          <Image
            style={[tw`h-full w-full`, { resizeMode: "center" }]}
            source={{ uri: getImg(item.profile_path, 300) }}
          />
        </View>
        <View>
          <Text style={tw`text-gray-200 text-xs text-center`}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CastMember;
