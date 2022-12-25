import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
export const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "http://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "http://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "http://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "http://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "http://i.imgur.com/2nCt3Sbl.jpg",
  },
  {
    title: "Middle Earth, Germany",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "http://i.imgur.com/lceHsT6l.jpg",
  },
];
const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const r = React.useRef<Carousel<number>>(null);
  return (
    <SafeAreaView style={s``}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s`flex flex-row justify-between items-center p-3`}>
          <Entypo name="menu" size={24} color="black" />
          <Text>Stark</Text>
          <Entypo name="shopping-cart" size={24} color="black" />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
