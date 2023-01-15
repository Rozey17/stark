import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const FavoriteProductCard = ({
  name,
  image,
  price,
}: {
  name: string;
  image: string;
  price: number;
}) => {
  return (
    <View style={s`flex-row  h-28 border-b border-gray-300 p-2`}>
      <Image source={{ uri: image }} style={s`w-24 h-full`} />
      <View style={s`px-3 `}>
        <Text style={s`w-48  mb-6 font-medium capitalize`}>{name}</Text>
        <TouchableOpacity
          style={s`w-28  rounded-md p-2 bg-gray-800 flex-row justify-center items-center`}
        >
          <Text style={s`text-white text-center`}>add to cart</Text>
        </TouchableOpacity>
      </View>
      <View style={s`flex-row  justify-end flex-1`}>
        <Text style={s`font-medium`}>€ {price}</Text>
      </View>
    </View>
  );
};

export default FavoriteProductCard;
