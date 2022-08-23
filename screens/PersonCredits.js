import React from "react";
import { View, ScrollView } from "react-native";
import tw from "../utils/tw";
import { usePersonImgs, usePerson, usePersonCredits } from "../API/useMovies";

//components
import ImgSlider from "../components/ImgSlider";
import PersonBio from "../components/PersonBio";
import MovieList from "../components/MovieList";
import Alert from "../components/Alert";

const PersonCredits = ({ navigation, route }) => {
  const { name, pid, role } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, []);
  const {
    data: imgs,
    isLoading: iLoading,
    isSuccess: iSuccess,
  } = usePersonImgs(pid);

  const {
    data: person,
    isLoading: pLoading,
    isSuccess: pSuccess,
  } = usePerson(pid);

  const {
    data: credits,
    isLoading: cLoading,
    isSuccess: cSuccess,
    isError: cError,
  } = usePersonCredits(pid);

  return (
    <Alert>
      <ScrollView style={tw`flex-1 bg-black`}>
        <View style={tw`mt-2 mb-4`}>
          <ImgSlider iLoading={iLoading} iSuccess={iSuccess} imgs={imgs} />
        </View>
        <View style={tw`px-4 mb-4`}>
          <PersonBio pLoading={pLoading} pSuccess={pSuccess} person={person} />
        </View>
        <View style={tw`mb-4 ${role == 1 ? "flex-col-reverse" : ""} `}>
          {credits?.cast?.length > 0 && (
            <View>
              <MovieList
                title="Movie Credits"
                isError={cError}
                isLoading={cLoading}
                movies={credits?.cast}
                showMore={false}
              />
            </View>
          )}

          {credits?.director?.length > 0 && (
            <View>
              <MovieList
                title="Directed"
                isError={cError}
                isLoading={cLoading}
                movies={credits?.director}
                showMore={false}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Alert>
  );
};

export default PersonCredits;
