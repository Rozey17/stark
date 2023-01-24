import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import Slick from "react-native-slick";
import ModalComponent from "../components/Modal";
import CategoryCard from "../components/CategoryCard";
import Product from "../components/Product";

import { client } from "../lib/sanity.server";
import { urlForImage } from "../lib/sanity";
import { addToCart, selectCartItems } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/HomeHeader";
import Carousel from "../components/Carousel";
import CarouselCards from "../components/CarouselCards";
import CustomCarousel from "../components/SnapCarousel";
import { ParallaxImage } from "react-native-snap-carousel";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;

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

  const items = useSelector(selectCartItems);
  // const favoritesItems = useSelector(selectFavoritesItems);
  // console.log(favoritesItems);
  return (
    <SafeAreaView style={s`h-full`}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
      >
        {/* header */}

        {/* carousel */}

        <Carousel />

        {/* categories */}

        <View style={s` pr-0`}>
          <View style={s`p-3 flex-row justify-between items-center`}>
            <Text
              style={[{ fontFamily: "jost-bold" }, s`capitalize text-xl mb-3`]}
            >
              Categories
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
              <Text
                style={[
                  { fontFamily: "jost-medium" },
                  s`text-gray-500 capitalize`,
                ]}
              >
                Show all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={s`pl-3`}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
            >
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
          <Text
            style={[{ fontFamily: "jost-bold" }, s`capitalize text-xl mb-3`]}
          >
            Best seller
          </Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product) => (
                <Product key={product._id} item={product} />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* <CustomCarousel
          data={data}
          enableSnap
          hasParallaxImages
          hasPagination
          itemWidth={Dimensions.get("window").width}
          renderContent={(image: ImageSourcePropType, index, parallaxProps) => {
            return (
              <View key={index}>
                <ParallaxImage
                  parallaxFactor={0.4}
                  source={image}
                  // style={styles.roomImage}
                  // containerStyle={styles.roomImageContainer}
                  {...parallaxProps}
                />
              </View>
            );
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
];