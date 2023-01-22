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
import Product from "../components/Product";

import { client } from "../lib/sanity.server";
import { urlForImage } from "../lib/sanity";
import { addToCart, selectCartItems } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesItems } from "../features/favoritesSlice";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

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
            <Text style={s`capitalize font-bold text-xl mb-3`}>Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
              <Text style={s`text-gray-500 capitalize`}>Show all</Text>
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
          <Text style={s`capitalize font-bold text-xl mb-3`}>Best seller</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product) => (
                <Product
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={urlForImage(product.image).url()}
                  description={product.description}
                  item={product}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={s`p-3 pr-0 mt-5`}>
          <Text style={s`capitalize font-bold text-xl mb-3`}>Best seller</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((product) => (
                <Product
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={urlForImage(product.image).url()}
                  description={product.description}
                  item={product}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
