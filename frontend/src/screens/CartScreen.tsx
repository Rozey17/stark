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

  console.log(groupedItemsInCart);
  // console.log(items);

  useEffect(() => {
    const groupedItems = items.reduce((results, product) => {
      (results[product.id] = results[product.id] || []).push(product);
      return results;
    }, {});
    setgroupedItemsInCart(groupedItems);
  }, [items]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              style={s`py-2 w-60 bg-gray-800 rounded`}
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
            product={items[0]}
            // id={items[0]._id}
            // description={items[0]?.description}
            // name={items[0]?.name}
            // image={items[0]?.image}
            // price={items[0]?.price}
            quantity={items.length}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;
