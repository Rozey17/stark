import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../features/cartSlice";
import { s } from "react-native-wind";
import CartProduct from "../components/CartProduct";

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
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={s`bg-white`}>
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
