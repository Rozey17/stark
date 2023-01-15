import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { selectFavoritesItems } from "../features/favoritesSlice";
import { useSelector } from "react-redux";
import { s } from "react-native-wind";
import { urlForImage } from "../lib/sanity";
import FavoriteProductCard from "../components/FavoriteProductCard";

const WishListScreen = () => {
  const favoritesItems = useSelector(selectFavoritesItems);

  return (
    <View style={s``}>
      {favoritesItems.map((product) => (
        <FavoriteProductCard
          key={product.name}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </View>
  );
};

export default WishListScreen;
