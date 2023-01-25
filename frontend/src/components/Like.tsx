import { View, Text, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishListSlice";
import { s } from "react-native-wind";
import { useToast } from "react-native-toast-notifications";

const Like = ({ item }) => {
  const toast = useToast();

  const wishlist = useSelector((state: any) => state.wishlist.list);
  const itemExist = (item: any) => {
    return wishlist.find((i: any) => i._id === item._id);
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

  const addedToWishListHandler = (item) => {
    dispatch(addToWishlist(item));
    toast.show("Added to favorites", {
      // type: "success",
      placement: "bottom",
      duration: 4000,
      // offset: 30,
      animationType: "zoom-in",
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        itemExist(item)
          ? removeFromWishlistHandler(item)
          : // : addedToWishListHandler(item);
            dispatch(addToWishlist(item));
      }}
      style={s`z-2 0`}
    >
      {itemExist(item) ? (
        <FontAwesome name="heart" size={24} color="red" />
      ) : (
        <Feather name="heart" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default Like;
