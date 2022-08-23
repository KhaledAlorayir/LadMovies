import React from "react";
import { ScrollView } from "react-native";
import tw from "../utils/tw";
import { usePopular, useTopRated, useUpcoming } from "../API/useMovies";
import MovieList from "../components/MovieList";
import Alert from "../components/Alert";

const Home = () => {
  const { data: popular, isLoading: PLoading, isError: PError } = usePopular();
  const {
    data: topRated,
    isLoading: TLoading,
    isError: TError,
  } = useTopRated();
  const {
    data: upcoming,
    isLoading: ULoading,
    isError: UError,
  } = useUpcoming();

  return (
    <Alert>
      <ScrollView style={tw`bg-black flex-1`}>
        <MovieList
          movies={popular?.pages[0]?.data?.results}
          title="Popular"
          isLoading={PLoading}
          isError={PError}
        />
        <MovieList
          movies={upcoming?.pages[0]?.data?.results}
          title="Upcoming"
          isLoading={ULoading}
          isError={UError}
        />
        <MovieList
          movies={topRated?.pages[0]?.data?.results}
          title="Top Rated"
          isLoading={TLoading}
          isError={TError}
        />
      </ScrollView>
    </Alert>
  );
};

export default Home;
