import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import tw from "../utils/tw";
import MovieCard from "../components/MovieCard";
import { useFavs } from "../Store";
import { FontAwesome5 } from "@expo/vector-icons";

const Favorites = ({ navigation }) => {
  const favs = useFavs((state) => state.favs);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: () => <HeaderBtn /> });
  }, []);

  return (
    <View style={tw`bg-black pt-4 flex-1`}>
      {favs.length > 0 ? (
        <View style={tw`flex-1`}>
          <FlatList
            data={favs}
            keyExtractor={(m) => m.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={tw`mb-4 mx-3`}>
                <MovieCard movie={item} />
              </View>
            )}
          />
        </View>
      ) : (
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-white font-bold`}>Add some Movies! 🍿</Text>
        </View>
      )}
    </View>
  );
};

const HeaderBtn = () => {
  const clear = useFavs((state) => state.clearFav);

  return (
    <TouchableOpacity onPress={() => clear()}>
      <FontAwesome5 name="trash" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default Favorites;
