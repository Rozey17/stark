import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../features/cartSlice";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { urlForImage } from "../lib/sanity";

const CartProduct = ({ id, product, quantity }) => {
  // const {
  //   //@ts-ignore
  //   params: { id, name, description, price, image },
  // } = useRoute();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ product }));
  };
  const removeItemFromCart = () => {
    if (quantity <= 0) return;
    dispatch(removeFromCart({ id }));
  };

  // const totalPrice = price * quantity;

  return (
    <View style={s`flex-row border-b border-gray-300 p-2`}>
      <Image
        source={{ uri: urlForImage(product.image).url() }}
        style={s`w-24 h-full`}
      />
      <View style={s`px-3 `}>
        <Text style={s`w-48  mb-6 font-medium capitalize`}>{product.name}</Text>
        <View style={s` flex-row items-center`}>
          {/* <Text style={s` mr-5 `}>Quantity</Text> */}
          {quantity === 1 ? (
            <TouchableOpacity
              onPress={removeItemFromCart}
              style={s` border bg-gray-100 h-10 w-10 border-gray-500 border-r-0 justify-center items-center rounded-tl-md rounded-bl-md `}
            >
              <Feather name="trash-2" size={20} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={removeItemFromCart}
              style={s` border bg-gray-100 border-r-0 border-gray-500 h-10 w-10 justify-center items-center rounded-tl-md rounded-bl-md `}
            >
              <Text style={s` text-lg`}>-</Text>
            </TouchableOpacity>
          )}
          <View
            style={s` border border-gray-500 bg-white h-10 w-14 justify-center items-center`}
          >
            <Text style={s`text-teal-600 font-medium`}>{quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={addItemToCart}
            style={s` border bg-gray-100 border-gray-500 border-l-0 h-10 w-10 justify-center items-center rounded-tr-md rounded-br-md`}
          >
            <Text style={s` text-lg`}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s`flex-row  justify-end flex-1`}>
        {/* <Text style={s`font-bold`}>€ {totalPrice.toFixed(2)}</Text> */}
      </View>
    </View>
  );
};

export default CartProduct;
