import { View, Text, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import Slick from "react-native-slick";

const Carousel = () => {
  return (
    <Slick
      style={s`h-80`}
      // showsButtons={true}
      autoplay
      autoplayTimeout={60}
      nextButton={false}
      prevButton={false}
      // showsHorizontalScrollIndicator
      activeDotColor="gray"
      // StickyHeaderComponent={}
    >
      <View style={s` `}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg",
          }}
          style={s`h-full w-full object-cover`}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3316918/pexels-photo-3316918.jpeg",
          }}
          style={s`h-full w-full object-cover`}
        />
        {/* <Text>And simple</Text> */}
      </View>
    </Slick>
  );
};

export default Carousel;
