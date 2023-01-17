import { View, Text, ScrollView } from "react-native";
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

const CartScreen = () => {
  const items = useSelector(selectCartItems);
  //   const items = useSelector((state) => selectCartItemsWithId(state, id));
  // console.log(items);
  const [groupedItemsInCart, setgroupedItemsInCart] = useState([]);
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
      return results;
    }, {});
    setgroupedItemsInCart(groupedItems);
  }, [items]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s`h-full`}>
        {Object.entries(groupedItemsInCart).map(([key, items]) => (
          <CartProduct
            key={key}
            id={items[0]._id}
            name={items[0].name}
            image={items[0].image}
            price={items[0].price}
            description={items[0].description}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;
