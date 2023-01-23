import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import ModalComponent from "./Modal";
import CartIcon from "./CartIcon";

const HomeHeader = () => {
  return (
    <View style={s`flex flex-row justify-between items-center p-3 bg-white`}>
      {/* <Entypo name="menu" size={24} color="black" /> */}
      <ModalComponent />
      <Text style={s`font-bold text-3xl`}>Stark</Text>
      <CartIcon />
    </View>
  );
};

export default HomeHeader;
