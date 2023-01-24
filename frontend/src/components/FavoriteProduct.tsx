import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { urlForImage } from "../lib/sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishListSlice";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { addToCart } from "../features/cartSlice";

const FavoriteProduct = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ product }));
  };

  const wishlist = useSelector((state: any) => state.wishlist.list);

  const itemExist = (product: any) => {
    return wishlist.find((i: any) => i._id === product._id);
  };

  const removeFromWishlistHandler = (product: any) => {
    return Alert.alert(
      "Message",
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
    <View style={s`flex-row h-40 border-b border-gray-300 p-2`}>
      <Image
        source={{ uri: urlForImage(product.image).url() }}
        style={s`w-28 h-full`}
      />
      <View style={s`px-3 `}>
        <Text
          style={{
            fontFamily: "jost-semibold",
            textTransform: "capitalize",
            fontSize: 18,
            marginBottom: 5,
            width: 200,
          }}
        >
          {product.name}
        </Text>
        <Text style={{ fontFamily: "jost-medium", marginBottom: 20 }}>
          € {product.price.toFixed(2)}
        </Text>

        <TouchableOpacity
          onPress={addItemToCart}
          style={s`  rounded-md  p-2 bg-gray-800 flex-row justify-center items-center`}
        >
          <Text
            style={[{ fontFamily: "jost-medium" }, s`text-white text-center`]}
          >
            add to cart
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          itemExist(product)
            ? removeFromWishlistHandler(product)
            : dispatch(addToWishlist(product));
        }}
        style={s`flex-row flex-1 justify-end`}
      >
        {itemExist(product) ? (
          <FontAwesome name="heart" size={20} color="#ef4444" />
        ) : (
          <Feather name="heart" size={20} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteProduct;
