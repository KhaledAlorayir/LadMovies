import React, { useState } from "react";
import { View, TextInput, ActivityIndicator, Text } from "react-native";
import tw from "../utils/tw";
import { useSearch } from "../API/useMovies";
import InfinteList from "../components/InfinteList";

const Search = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(null);
  const {
    isSuccess,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useSearch(query);

  const SubmitHandler = () => {
    if (input.trim() !== "") {
      navigation.setOptions({ title: `search results for "${input}" ` });
      setQuery(input);
    }
  };

  return (
    <View style={tw`bg-black pt-4 flex-1`}>
      <View style={tw`px-2 mb-6`}>
        <TextInput
          style={tw`border-slate-300 border-2 rounded px-1 py-2 text-white`}
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={SubmitHandler}
        />
      </View>
      {query ? (
        <View>
          {isLoading ? (
            <View>
              <ActivityIndicator size={"large"} color="white" />
            </View>
          ) : data?.pages[0]?.data?.total_results !== 0 ? (
            <InfinteList
              data={data}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              isSuccess={isSuccess}
            />
          ) : (
            <View style={tw`h-full justify-center items-center`}>
              <Text style={tw`text-white font-bold`}>No results found!</Text>
            </View>
          )}
        </View>
      ) : (
        <View style={tw`h-full justify-center items-center`}>
          <Text style={tw`text-white font-bold`}>Look up Movies!</Text>
        </View>
      )}
    </View>
  );
};

export default Search;
