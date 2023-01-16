import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import { selectCartItems } from "../features/cartSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  return (
    //@ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <View style={s`relative flex flex-row`}>
        <View
          style={s`h-5 w-5 bg-red-500 rounded-full left-1 z-10 items-center justify-center`}
        >
          <Text style={s`text-white text-xs`}>{items.length}</Text>
        </View>
        <Entypo name="shopping-cart" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
