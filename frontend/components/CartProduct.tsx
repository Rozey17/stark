import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { s } from "react-native-wind";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
//   selectCartItemsWithId,
// } from "../features/cartSlice";
import { Store } from "../utils/store";

const CartProduct = ({
  id,
  name,
  image,
  price,
  quantity,
  addToCart,
  removeFromCart,
}: {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  addToCart: () => void;
  removeFromCart: () => void;
}) => {
  // const dispatch = useDispatch();

  // const addItemToCart = () => {
  //   dispatch(addToCart({ id, name, image, price }));
  // };
  // const removeItemFromCart = () => {
  //   if (items.length <= 0) return;
  //   dispatch(removeFromCart({ id }));
  // };

  // const items = useSelector((state) => selectCartItemsWithId(state, id));

  // const totalPrice = price * items.length;

  // console.log(items);

  return (
    <View style={s`flex-row  h-28 border-b border-gray-300 p-2`}>
      <Image source={{ uri: image }} style={s`w-24 h-full`} />
      <View style={s`px-3 `}>
        <Text style={s`w-48  mb-6 font-medium capitalize`}>{name}</Text>
        <View style={s` flex-row `}>
          {/* {cartItems.length >= 1 ? (
            <TouchableOpacity
              onPress={removeFromCart}
              style={s` border h-10 w-10 border-r-0 justify-center items-center`}
            >
              <Text style={s` text-lg`}>-</Text>
            </TouchableOpacity>
          ) : ( */}
          <TouchableOpacity
            onPress={removeFromCart}
            style={s` border border-gray-200 h-10 w-10 justify-center items-center`}
          >
            <Text style={s` text-lg`}>-</Text>
          </TouchableOpacity>
          {/* )} */}
          <View style={s` border border h-10 w-20 justify-center items-center`}>
            <Text>{quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={addToCart}
            style={s` border border-l-0 h-10 w-10 justify-center items-center`}
          >
            <Text style={s` text-lg`}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s`flex-row  justify-end flex-1`}>
        {/* <Text style={s`font-medium`}>€ {totalPrice}</Text> */}
      </View>
    </View>
  );
};

export default CartProduct;
