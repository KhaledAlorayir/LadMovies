import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "../utils/tw";
import { useMovie, useCredits, useSimilar } from "../API/useMovies";
import { getFullImg } from "../utils/helpers";
import { FontAwesome } from "@expo/vector-icons";

//components
import MovieInfo from "../components/MovieInfo";
import LoadingScreen from "../components/LoadingScreen";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";
import { useFavs } from "../Store";
import Alert from "../components/Alert";

const MovieDetails = ({ navigation, route }) => {
  const { mid, title } = route.params;
  const addFav = useFavs((state) => state.addFav);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);

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

  React.useEffect(() => {
    if (mSuccess) {
      navigation.setOptions({
        headerRight: () => (
          <HeaderBtn onPress={() => addFav(movie)} mid={mid} />
        ),
      });
    }
  }, [mSuccess]);

  if (mLoading) {
    return <LoadingScreen />;
  }

  return (
    <Alert>
      <ScrollView style={tw`flex-1 bg-black`}>
        {mSuccess && (
          <>
            <View
              style={[
                { height: Dimensions.get("window").height / 3 },
                tw`mb-4`,
              ]}
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
                <Text style={tw`text-gray-400 text-base`}>
                  {movie.overview}
                </Text>
              </View>
            </View>
            <View style={tw`px-4 mb-6`}>
              <Cast
                isLoading={cLoading}
                isSuccess={cSuccess}
                credits={credits}
              />
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
    </Alert>
  );
};

const HeaderBtn = ({ onPress, mid }) => {
  const favs = useFavs((state) => state.favs);
  const faviorted = favs.find((m) => m.id === mid);
  //
  return (
    <TouchableOpacity onPress={onPress}>
      {faviorted ? (
        <FontAwesome name="heart" size={28} color="white" />
      ) : (
        <FontAwesome name="heart-o" size={28} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default MovieDetails;
