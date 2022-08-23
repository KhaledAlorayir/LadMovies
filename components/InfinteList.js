import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import MovieCard from "./MovieCard";
import tw from "../utils/tw";

const InfinteList = ({
  isSuccess,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  data,
}) => {
  const FetchHandler = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      {isSuccess && (
        <FlatList
          data={data.pages.map((p) => p.data.results).flat()}
          keyExtractor={(m) => m.id}
          onEndReached={FetchHandler}
          numColumns={2}
          ListFooterComponent={() =>
            isFetchingNextPage && <ActivityIndicator size={"large"} />
          }
          renderItem={({ item }) => (
            <View style={tw`mb-4 mx-3`}>
              <MovieCard movie={item} />
            </View>
          )}
        />
      )}
    </>
  );
};

export default InfinteList;
