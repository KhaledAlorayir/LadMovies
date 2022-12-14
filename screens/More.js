import React, { useEffect } from "react";
import { View } from "react-native";
import { useInfintie } from "../API/useMovies";
import tw from "../utils/tw";
import LoadingScreen from "../components/LoadingScreen";
import InfinteList from "../components/InfinteList";
import Alert from "../components/Alert";

const More = ({ navigation, route }) => {
  const { title } = route.params;
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfintie(title);

  if (isLoading) {
    return <LoadingScreen />;
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <Alert>
      <View style={tw`flex-1 pt-4 items-center bg-black`}>
        <InfinteList
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isSuccess={isSuccess}
        />
      </View>
    </Alert>
  );
};

export default More;
