import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import tw from "../utils/tw";
import MovieCard from "./MovieCard";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

const MovieList = ({ movies, title, isLoading, isError, showMore = true }) => {
  if (isError) {
    return;
  }

  return (
    <View style={tw`py-2 mt-4 `}>
      <View style={tw` py-2 px-4 flex-row justify-between items-center`}>
        <Text style={tw`text-lg font-semibold text-white`}>{title}</Text>
        {showMore && (
          <Link to={{ screen: "More", params: { title } }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="white"
            />
          </Link>
        )}
      </View>
      {!isLoading ? (
        <FlatList
          data={movies}
          keyExtractor={(m) => m.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <MovieCard movie={item} />;
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  );
};

export default MovieList;
