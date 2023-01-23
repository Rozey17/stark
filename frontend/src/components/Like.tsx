import { View, Text, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishListSlice";
import { s } from "react-native-wind";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Like = ({ item }) => {
  const wishlist = useSelector((state: any) => state.wishlist.list);
  const itemExist = (item: any) => {
    return wishlist.find((i: any) => i.id === item.id);
  };

  const dispatch = useDispatch();

  const removeFromWishlistHandler = (product: any) => {
    return Alert.alert(
      "Alert!",
      "Are you sure you want to delete from wishlist ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => dispatch(removeFromWishlist(product)),
        },
      ]
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {
        itemExist(item)
          ? removeFromWishlistHandler(item)
          : dispatch(addToWishlist(item));
      }}
      style={s`absolute top-2 right-2 z-10`}
    >
      {itemExist(item) ? (
        <FontAwesome name="heart" size={20} color="red" />
      ) : (
        <Feather name="heart" size={20} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default Like;
