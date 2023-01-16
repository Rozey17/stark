import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
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
import { Store } from "../utils/store";

const CartScreen = () => {
  const items = useSelector(selectCartItems);
  //   const items = useSelector((state) => selectCartItemsWithId(state, id));
  // console.log(items);
  // @ts-ignore
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item: any, quantity: any) => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  return (
    // <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s``}>
        {cartItems.map((product) => (
          <CartProduct
            key={product.name}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            addToCart={() => updateCartHandler(product, 1)}
            removeFromCart={() => removeItemHandler(product)}
          />
        ))}
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default CartScreen;
