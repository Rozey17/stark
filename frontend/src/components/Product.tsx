import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cartSlice";
import {
  addToFavorites,
  selectFavoritesItems,
} from "../features/favoritesSlice";
import Like from "./Like";
import { addToWishlist, removeFromWishlist } from "../features/wishListSlice";

const Product = ({
  id,
  name,
  price,
  image,
  description,
  item,
}: {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  item: any;
}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, description, image, price }));
  };

  const wishlist = useSelector((state: any) => state.wishlist.list);
  const productList = useSelector((state: any) => state.cart.list);
  const itemExist = (id: string) => {
    return wishlist.find((i: string) => i === id);
  };

  const removeFromWishlistHandler = (id: string) => {
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
          onPress: () => dispatch(removeFromWishlist(id)),
        },
      ]
    );
  };
  //  const productExist = (item: string) => {
  //    return productList.find((i: string) => i.id === item.id);
  //  };

  return (
    <Pressable
      style={s`h-72 w-48`}
      onPress={() =>
        //@ts-ignore
        navigation.push("Product", {
          id,
          name,
          price,
          image,
          description,
        })
      }
    >
      <View style={s`relative h-3/4 mr-4 rounded-lg overflow-hidden mb-1`}>
        {/* product image */}

        <Image
          source={{
            uri: image,
          }}
          style={s`bg-contain h-full w-full `}
        />

        {/* add to favorites button */}
        {/* 
        <TouchableOpacity
          onPress={() => {
            itemExist(id)
              ? removeFromWishlistHandler(id)
              : dispatch(addToWishlist(id));
          }}
          style={s`absolute top-2 right-2`}
        >
          {itemExist(item) ? (
            <FontAwesome name="heart" size={24} color="red" />
          ) : (
            <Feather name="heart" size={24} color="black" />
          )}
        </TouchableOpacity> */}

        <Like item={item} />

        {/* add to cart button */}

        <TouchableOpacity
          onPress={addItemToCart}
          style={s`absolute bottom-2 right-2`}
        >
          <Entypo name="squared-plus" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={s`rounded overflow-hidden flex flex-row absolute top-2 left-2 `}
        >
          <View style={s`bg-red-500 px-1 `}>
            <Text style={s`text-white text-xs`}>-20%</Text>
          </View>
          <View style={s`bg-cyan-600 px-1 `}>
            <Text style={s`text-white text-xs`}>New</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={s`capitalize`}>{name}</Text>
        <Text>$ {price}</Text>
      </View>
      <View style={s`flex flex-row`}>
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
      </View>
    </Pressable>
  );
};

export default Product;
