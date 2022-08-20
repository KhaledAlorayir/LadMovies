import React from "react";
import { View, ActivityIndicator, Dimensions, Image } from "react-native";
import tw from "../utils/tw";
import { getFullImg } from "../utils/helpers";
import Carousel from "react-native-reanimated-carousel";

const ImgSlider = ({ iLoading, iSuccess, imgs }) => {
  const height = Dimensions.get("window").height / 2;
  const width = Dimensions.get("window").width;
  return (
    <>
      {!iLoading && iSuccess ? (
        <Carousel
          height={height}
          width={width}
          enabled={imgs.length > 1}
          data={imgs}
          renderItem={({ item }) => (
            <View>
              <Image
                style={[tw`h-full w-full`, { resizeMode: "center" }]}
                source={{ uri: getFullImg(item.file_path) }}
              />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </>
  );
};

export default ImgSlider;
