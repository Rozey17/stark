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

const CartProduct = ({
  id,
  name,
  image,
  price,
  // description,
  quantity,
}: {
  id: string;
  name: string;
  image: string;
  price: number;
  // description: string;
  quantity: number;
}) => {
  // const {
  //   //@ts-ignore
  //   params: { id, name, description, price, image },
  // } = useRoute();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, image, price }));
  };
  const removeItemFromCart = () => {
    if (quantity <= 0) return;
    dispatch(removeFromCart({ id }));
  };

  return (
    <View style={s`flex-row  h-28 border-b border-gray-300 p-2`}>
      <Image source={{ uri: image }} style={s`w-24 h-full`} />
      <View style={s`px-3 `}>
        <Text style={s`w-48  mb-6 font-medium capitalize`}>{name}</Text>
        <View style={s` flex-row `}>
          {quantity >= 1 ? (
            <TouchableOpacity
              onPress={removeItemFromCart}
              style={s` border h-10 w-10 border-r-0 justify-center items-center`}
            >
              <Text style={s` text-lg`}>-</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={removeItemFromCart}
              style={s` border border-gray-200 h-10 w-10 justify-center items-center`}
            >
              <Text style={s` text-lg`}>-</Text>
            </TouchableOpacity>
          )}
          <View style={s` border border h-10 w-20 justify-center items-center`}>
            <Text>{quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={addItemToCart}
            style={s` border border-l-0 h-10 w-10 justify-center items-center`}
          >
            <Text style={s` text-lg`}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s`flex-row  justify-end flex-1`}>
        <Text style={s`font-medium`}>€ {price}</Text>
      </View>
    </View>
  );
};

export default CartProduct;
