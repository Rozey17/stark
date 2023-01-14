import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo, Feather } from "@expo/vector-icons";

const ProductCard = ({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) => {
  return (
    <Pressable style={s``}>
      <View style={s`relative h-72 w-60 mr-3 rounded overflow-hidden`}>
        <Image
          source={{
            uri: image,
          }}
          style={s`object-cover h-full w-full `}
        />
        <TouchableOpacity style={s`absolute top-2 right-2`}>
          <Feather name="heart" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={s`absolute bottom-2 right-2`}>
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
        <Text>{name}</Text>
        <Text>${price}</Text>
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

export default ProductCard;
