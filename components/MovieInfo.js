import React from "react";
import { Text } from "react-native";
import { toHoursAndMinutes } from "../utils/helpers";
import tw from "../utils/tw";
import { AntDesign } from "@expo/vector-icons";

const MovieInfo = ({ data }) => {
  return (
    <>
      <Text style={tw`text-gray-400 font-semibold text-base text-center px-6`}>
        <Text>{data.release_date.split("-")[0]}</Text>
        <Text> - </Text>
        {data.genres?.map((g, i) => (
          <Text key={g.id}>
            {g.name}
            {i + 1 !== data.genres.length && ", "}
          </Text>
        ))}
        <Text> - </Text>
        <Text>{toHoursAndMinutes(data.runtime)}</Text>
      </Text>
      {data.vote_average > 0 && (
        <Text style={tw`text-gray-300 font-bold text-base text-center px-6`}>
          {data.vote_average.toFixed(1)} <AntDesign name="star" />
        </Text>
      )}
    </>
  );
};

export default MovieInfo;
