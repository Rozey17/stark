import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView } from "react-native";

export function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert("Image description:" + item.description)}>
      <SafeAreaView>
        <ParallaxImage
          source={{ uri: item.source }} /* the source of the image */
          {...parallaxProps} /* pass in the necessary props */
        />
        <Text numberOfLines={2}>{item.title}</Text>
      </SafeAreaView>
    </Pressable>
  );
}
