import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { useRoute } from "@react-navigation/native";

interface Payload {
  name: string;
  description: string;
  price: number;
  image: string;
}

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
    params: { name, description, price, image },
  } = useRoute();
  return (
    <SafeAreaView style={s`bg-white h-full`}>
      <ScrollView>
        <Image source={{ uri: image }} style={s`h-96 w-full`} />
        <View style={s`mt-5 p-2`}>
          <Text style={s`font-semibold capitalize text-2xl mb-3`}>{name}</Text>
          <Text style={s`font-semibold capitalize text-lg mb-3`}>
            € {price}
          </Text>
          <Text style={s`  font-bold text-xl mb-2`}>Description</Text>
          <Text style={s`  `}>{description}</Text>
          <View style={s` flex-row items-center mt-5`}>
            <Text style={s` uppercase mr-3`}>Quantity</Text>
            <View style={s` flex-row `}>
              {quantity >= 2 ? (
                <TouchableOpacity
                  onPress={handleRemoveQuantity}
                  style={s` border h-10 w-10 border-r-0 justify-center items-center`}
                >
                  <Text>-</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleRemoveQuantity}
                  style={s` border border-gray-200 h-10 w-10 justify-center items-center`}
                >
                  <Text>-</Text>
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
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
