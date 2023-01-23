import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { s } from "react-native-wind";
import CartIcon from "./CartIcon";

export default function Header({ title, arrow }) {
  const navigation = useNavigation();

  return (
    <View style={s`p-5 bg-white flex-row justify-between items-center`}>
      {arrow && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      )}

      <Text style={[{ fontFamily: "jost-bold" }, s`text-xl text-center`]}>
        {title}
      </Text>
      <CartIcon />
    </View>
  );
}
