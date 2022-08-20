import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import tw from "../utils/tw";

const PersonBio = ({ pLoading, pSuccess, person }) => {
  return (
    <>
      {!pLoading && pSuccess ? (
        <>
          <Text style={tw`text-white font-semibold text-lg`}>Bio</Text>
          <Text style={tw`text-gray-400 text-base`}>{person.biography}</Text>
          <View
            style={tw`flex-row items-center flex-wrap justify-between mt-4`}
          >
            <Text style={tw``}>
              <Text style={tw`text-white font-semibold`}>Known for: </Text>
              <Text style={tw`text-gray-400`}>
                {person.known_for_department}
              </Text>
            </Text>
            <Text style={tw``}>
              <Text style={tw`text-white font-semibold`}>birthday: </Text>
              <Text style={tw`text-gray-400`}>{person.birthday}</Text>
            </Text>
          </View>
          <View
            style={tw`flex-row items-center flex-wrap justify-between mt-4`}
          >
            <Text style={tw``}>
              <Text style={tw`text-white font-semibold`}>Born in: </Text>
              <Text style={tw`text-gray-400`}>{person.place_of_birth}</Text>
            </Text>
            <Text style={tw``}>
              <Text style={tw`text-white font-semibold`}>Age: </Text>
              <Text style={tw`text-gray-400`}>
                {new Date().getFullYear() -
                  parseInt(person.birthday.split("-")[0])}
                {person.deathday && " (deceased)"}
              </Text>
            </Text>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </>
  );
};

export default PersonBio;
