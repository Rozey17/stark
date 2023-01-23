import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../features/cartSlice";
import { s } from "react-native-wind";
import CartProduct from "../components/CartProduct";
import { Entypo } from "@expo/vector-icons";
import Navigation from "../navigation";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [groupedItemsInCart, setgroupedItemsInCart] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setgroupedItemsInCart(groupedItems);
  }, [items]);

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={s` h-full `}>
      {items.length === 0 && (
        <View style={s`items-center mt-10`}>
          <Entypo name="shopping-cart" size={40} color="black" />
          <Text
            style={s`p-5 text-center text-gray-700 text-xl font-medium text-center `}
          >
            Your cart is empty
          </Text>
          <TouchableOpacity
            style={s`py-2 px-4 bg-gray-800 rounded`}
            //@ts-ignore
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                fontFamily: "jost-medium",
                color: "white",
                textAlign: "center",
              }}
            >
              Start shopping now
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {Object.entries(groupedItemsInCart).map(([key, items]) => (
        <CartProduct
          key={key}
          id={key}
          image={items[0].image}
          name={items[0].name}
          price={items[0].price}
          quantity={items.length}
        />
        // <View></View>
      ))}
    </View>
    // </ScrollView>
  );
};

export default CartScreen;
