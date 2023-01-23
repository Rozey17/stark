import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { s } from "react-native-wind";
import { urlForImage } from "../lib/sanity";
import FavoriteProduct from "../components/FavoriteProduct";
// import { itemsInWishlist } from "../features/wishListSlice";

const WishListScreen = () => {
  const favoritesItems = useSelector((state: any) => state.wishlist.list);

  return (
    <View style={s``}>
      {favoritesItems.map((product) => (
        <FavoriteProduct key={product.name} product={product} />
      ))}
    </View>
  );
};

export default WishListScreen;
