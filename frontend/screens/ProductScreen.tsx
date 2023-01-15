import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cartSlice";

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    quantity >= 2 && setQuantity(quantity - 1);
  }
  const {
    //@ts-ignore
    params: { _id, name, description, price, image },
  } = useRoute();

  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);

  const addItemToCart = () => {
    dispatch(addToCart({ _id, name, description, image }));
  };

  console.log(items);

  return (
    <SafeAreaView
      style={s`bg-white relative`}
      edges={["bottom", "left", "right", "top"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* product image */}

        <Image source={{ uri: image }} style={s`h-96 w-full`} />

        <View style={s`mt-5 p-2`}>
          <Text style={s`font-semibold capitalize text-2xl mb-3`}>{name}</Text>
          <Text style={s`font-semibold capitalize text-lg mb-3`}>
            € {price}
          </Text>
          <Text style={s`font-bold text-xl mb-2`}>Description</Text>
          <Text style={s``}>{description}</Text>

          <View style={s` flex-row items-center mt-5 mb-20`}>
            <Text style={s` mr-10 text-lg`}>Quantity</Text>
            <View style={s` flex-row `}>
              {quantity >= 2 ? (
                <TouchableOpacity
                  onPress={handleRemoveQuantity}
                  style={s` border h-10 w-10 border-r-0 justify-center items-center`}
                >
                  <Text style={s` text-lg`}>-</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleRemoveQuantity}
                  style={s` border border-gray-200 h-10 w-10 justify-center items-center`}
                >
                  <Text style={s` text-lg`}>-</Text>
                </TouchableOpacity>
              )}
              <View
                style={s` border border h-10 w-32 justify-center items-center`}
              >
                <Text>{quantity}</Text>
              </View>

              <TouchableOpacity
                onPress={handleAddQuantity}
                style={s` border border-l-0 h-10 w-10 justify-center items-center`}
              >
                <Text style={s` text-lg`}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={s`absolute z-10 bottom-0 p-3 flex-row justify-center items-center border-t border-gray-200 bg-white`}
      >
        <TouchableOpacity
          onPress={addItemToCart}
          style={s` w-full rounded-md p-2 bg-gray-800 flex-row justify-center items-center`}
        >
          <Entypo name="shopping-cart" size={15} color="white" />
          <Text style={s`text-white text-center ml-3`}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
