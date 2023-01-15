import { View, Text, ScrollView } from "react-native";
import React from "react";
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

const CartScreen = () => {
  const items = useSelector(selectCartItems);
  //   const items = useSelector((state) => selectCartItemsWithId(state, id));
  return (
    // <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s``}>
        {items
          // .filter((product) => product._id === id)
          .map((product) => (
            <CartProduct
              key={product.name}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default CartScreen;
