import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import tw from "../utils/tw";
import { useMovie, useCredits, useSimilar } from "../API/useMovies";
import { getFullImg } from "../utils/helpers";

//components
import MovieInfo from "../components/MovieInfo";
import LoadingScreen from "../components/LoadingScreen";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";

const MovieDetails = ({ navigation, route }) => {
  const { mid, title } = route.params;
  navigation.setOptions({ title });

  const {
    data: movie,
    isLoading: mLoading,
    isSuccess: mSuccess,
  } = useMovie(mid);

  const {
    data: credits,
    isLoading: cLoading,
    isSuccess: cSuccess,
  } = useCredits(mid);
  const {
    data: similar,
    isLoading: sLoading,
    isError: sError,
  } = useSimilar(mid);

  if (mLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView style={tw`flex-1 bg-black`}>
      {mSuccess && (
        <>
          <View
            style={[{ height: Dimensions.get("window").height / 3 }, tw`mb-4`]}
          >
            <Image
              style={[tw`h-full w-full`]}
              source={{ uri: getFullImg(movie.backdrop_path) }}
            />
          </View>
          <View style={tw`mb-6`}>
            <MovieInfo data={movie} />
          </View>
          <View style={tw`px-4 mb-6`}>
            <View>
              <Text style={tw`text-white font-semibold text-lg`}>
                Plot Summary
              </Text>
              <Text style={tw`text-gray-400 text-base`}>{movie.overview}</Text>
            </View>
          </View>
          <View style={tw`px-4 mb-6`}>
            <Cast isLoading={cLoading} isSuccess={cSuccess} credits={credits} />
          </View>
          <View style={tw` mb-6`}>
            <MovieList
              isLoading={sLoading}
              isError={sError}
              movies={similar}
              showMore={false}
              title="Similar Movies"
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
