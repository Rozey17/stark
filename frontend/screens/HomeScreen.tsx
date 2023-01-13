import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import Card from "../components/Card";
import Slick from "react-native-slick";
import ModalComponent from "../components/Modal";
import CategoryCard from "../components/CategoryCard";

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
  const items = [
    {
      name: "new",
      price: 25.99,
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    },
    {
      name: "new item",
      price: 25.99,
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    },
    {
      name: "item",
      price: 25.99,
      image:
        "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
    },
    {
      name: "new-item",
      price: 25.99,
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const categories = [
    {
      name: "Living",

      image:
        "https://cdn.dribbble.com/users/464907/screenshots/6279944/illustration-led.jpg?compress=1&resize=400x300",
    },
    {
      name: "Dining",

      image:
        "https://cdn.dribbble.com/users/464907/screenshots/6279944/illustration-led.jpg?compress=1&resize=400x300",
    },
    {
      name: "Lighting",

      image:
        "https://cdn.dribbble.com/users/464907/screenshots/6279944/illustration-led.jpg?compress=1&resize=400x300",
    },
    {
      name: "Tech",

      image:
        "https://cdn.dribbble.com/users/464907/screenshots/6279944/illustration-led.jpg?compress=1&resize=400x300",
    },
    {
      name: "Furniture",

      image:
        "https://cdn.dribbble.com/users/464907/screenshots/6279944/illustration-led.jpg?compress=1&resize=400x300",
    },
  ];
  return (
    <SafeAreaView style={s`bg-white h-full`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={s`flex flex-row justify-between items-center p-3`}>
          {/* <Entypo name="menu" size={24} color="black" /> */}
          <ModalComponent />
          <Text>Stark</Text>
          <Entypo name="shopping-cart" size={24} color="black" />
        </View>
        <Slick style={s`h-72`} showsButtons={true}>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
              }}
              style={s`h-full w-full object-cover`}
            />
            {/* <Text>Hello Slick</Text> */}
          </View>
          <View>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg",
              }}
              style={s`h-full w-full object-cover`}
            />
            {/* <Text>Beautiful</Text> */}
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

        <View style={s`p-3 pr-0`}>
          <Text style={s`capitalize font-bold text-2xl mb-3`}>Categories</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
                <CategoryCard
                  key={item.name}
                  name={item.name}
                  image={item.image}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={s`p-3 pr-0`}>
          <Text style={s`capitalize font-bold text-2xl mb-3`}>Best seller</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {items.map((item) => (
                <Card
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </ScrollView>
          </View>
          {/* <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {items.map((item) => (
                <Card
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </ScrollView>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
