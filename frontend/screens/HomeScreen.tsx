import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import Slick from "react-native-slick";
import ModalComponent from "../components/Modal";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { ListCategoriesDocument } from "../components/apollo-components";
import { apolloClient } from "../lib/graphql";
import { initializeApollo } from "../lib/graphql.server";
import { client } from "../lib/sanity.server";
import { urlForImage } from "../lib/sanity";

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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'category']`).then((res) => {
      setCategories(res);
    });
    client.fetch(`*[_type == 'product']`).then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <SafeAreaView style={s` h-full`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}

        <View style={s`flex flex-row justify-between items-center p-3`}>
          {/* <Entypo name="menu" size={24} color="black" /> */}
          <ModalComponent />
          <Text>Stark</Text>
          <View style={s`relative flex flex-row`}>
            <View
              style={s`h-4 w-4 bg-red-500 rounded-full left-1 z-10 items-center justify-center`}
            >
              <Text style={s`text-white text-xs`}>0</Text>
            </View>
            <Entypo name="shopping-cart" size={24} color="black" />
          </View>
        </View>

        {/* carousel */}

        <Slick
          style={s`h-72`}
          // showsButtons={true}
          autoplay
          autoplayTimeout={60}
          nextButton={false}
          prevButton={false}
          // showsHorizontalScrollIndicator
          activeDotColor="gray"
          // StickyHeaderComponent={}
        >
          <View>
            <Image
              source={{
                uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.architecturaldigest.com%2Fstory%2Fbest-online-furniture-stores&psig=AOvVaw03GQwsm9mZ2RJJe1ZPJYG4&ust=1673798772492000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCazL24x_wCFQAAAAAdAAAAABAQ",
              }}
              style={s`h-full w-full object-cover`}
            />
          </View>
          <View style={s`h-full w-full bg-red-500`}>
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

        {/* categories */}

        <View style={s` pr-0`}>
          <View style={s`p-3 flex-row justify-between items-center`}>
            <Text style={s`capitalize font-bold text-2xl mb-3`}>
              Categories
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
              <Text style={s`uppercase`}>Show all</Text>
            </TouchableOpacity>
          </View>
          <View style={s`pl-3`}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
                <CategoryCard
                  key={item._id}
                  name={item.name}
                  image={urlForImage(item.image).url()}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* best sellers */}

        <View style={s`p-3 pr-0 mt-5`}>
          <Text style={s`capitalize font-bold text-2xl mb-3`}>Best seller</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  image={urlForImage(product.image).url()}
                  description={product.description}
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
