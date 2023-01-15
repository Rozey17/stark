import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import ModalComponent from "./Modal";
import Cart from "./Cart";

const Header = () => {
  return (
    <View style={s`flex flex-row justify-between items-center p-3`}>
      {/* <Entypo name="menu" size={24} color="black" /> */}
      <ModalComponent />
      <Text>Stark</Text>
      <Cart />
    </View>
  );
};

export default Header;
