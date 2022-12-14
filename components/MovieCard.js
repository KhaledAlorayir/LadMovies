import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import tw from "../utils/tw";
import { getImg } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("MovieDetails", {
          mid: movie.id,
          title: movie.title,
        })
      }
    >
      <View
        style={[tw`mx-4 p-1`, { width: Dimensions.get("window").width / 3 }]}
      >
        <View
          style={[
            tw`rounded overflow-hidden mb-2`,
            { height: Dimensions.get("window").height / 4.5 },
          ]}
        >
          <Image
            style={[tw`h-full w-full`]}
            source={{ uri: getImg(movie.poster_path, 300) }}
          />
        </View>
        <View style={tw`ml-1`}>
          <Text style={tw`text-white font-semibold`}>{movie.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
