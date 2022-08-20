import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import tw from "../utils/tw";
import CastMember from "./CastMember";

const Cast = ({ isLoading, isSuccess, credits }) => {
  if (isLoading) {
    return <ActivityIndicator color="white" size="large" />;
  }

  return (
    <>
      {isSuccess && (
        <View>
          <View style={tw`mb-6`}>
            <View>
              <Text style={tw`text-white font-semibold text-lg mb-2`}>
                Director{credits.director.length > 1 && "s"}
              </Text>
            </View>
            <View>
              <FlatList
                data={credits.director}
                keyExtractor={(d) => d.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => <CastMember item={item} role={1} />}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={tw`text-white font-semibold text-lg mb-2`}>
                Cast
              </Text>
            </View>
            <View>
              <FlatList
                data={credits.cast}
                keyExtractor={(d) => d.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CastMember item={item} role={2} />}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Cast;
