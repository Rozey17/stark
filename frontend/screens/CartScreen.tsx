import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartItemsWithId,
} from "../features/cartSlice";
import { s } from "react-native-wind";
import CartProduct from "../components/CartProduct";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartScreen = () => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s``}>
        {Object.entries(groupedItemsInCart).map(([key, items]) => (
          <View
            key={key}
            style={s`flex-row  h-28 border-b border-gray-300 p-2`}
          ></View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;
