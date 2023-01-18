import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../features/cartSlice";
import Header from "../components/Header";
// import ToastManager, { Toast } from "toastify-react-native";
import { addToFavorites } from "../features/favoritesSlice";
import Toast from "react-native-toast-message";

const ProductScreen = () => {
  const {
    //@ts-ignore
    params: { id, name, description, price, image },
  } = useRoute();
  const [selected, setSelected] = useState(false);

  //   const navigation = useNavigation();

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerShown: false,
  //     });
  //   }, []);

  // const showToasts = () => {
  //   Toast.success("Promised is resolved");
  // };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "added to favorites !",
      // text2: "This is some something 👋",
    });
  };

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, description, image, price }));
  };
  const removeItemFromCart = () => {
    if (items.length <= 0) return;
    dispatch(removeFromCart({ id }));
  };

  const items = useSelector((state) => selectCartItemsWithId(state, id));
  const addItemToFavorites = () => {
    dispatch(addToFavorites({ id, name, description, image, price }));
  };

  return (
    <SafeAreaView
      style={s`bg-white relative h-full`}
      edges={["left", "right", "bottom"]}
    >
      {/* <ToastManager /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // scrollEventThrottle={16}
        // StickyHeaderComponent={Header}
        // stickyHeaderIndices={[0]}
      >
        {/* product image */}

        <Image source={{ uri: image }} style={s`h-96 w-full`} />

        <View style={s`mt-5 p-2`}>
          <View style={s`flex-row items-center justify-between`}>
            <Text style={s`font-semibold capitalize text-2xl mb-3`}>
              {name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSelected(!selected);
                addItemToFavorites();
                showToast();
              }}
              // style={s`absolute top-2 right-2`}
            >
              {selected ? (
                <FontAwesome name="heart" size={24} color="red" />
              ) : (
                <Feather name="heart" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <Text style={s`font-semibold capitalize text-lg mb-3`}>
            € {price}
          </Text>
          <Text style={s`font-bold text-xl `}>Description</Text>
          <Text style={s``}>{description}</Text>
        </View>
      </ScrollView>
      <View
        style={s`absolute z-10 bottom-0 p-3 flex-row justify-center items-center border-t border-gray-200 bg-white`}
      >
        <TouchableOpacity
          onPress={addItemToCart}
          style={s` w-full rounded-md p-2 bg-gray-800 flex-row justify-center items-center`}
        >
          <Entypo name="shopping-cart" size={15} color="white" />
          <Text style={s`text-white text-center ml-3`}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default ProductScreen;
