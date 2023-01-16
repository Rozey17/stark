import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { s } from "react-native-wind";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cartSlice";
import {
  addToFavorites,
  selectFavoritesItems,
} from "../features/favoritesSlice";
import { Store } from "../utils/store";

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
}: {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}) => {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();

  // const dispatch = useDispatch();

  // const cartItems = useSelector(selectCartItems);
  // const favoritesItems = useSelector(selectFavoritesItems);

  // const addItemToCart = () => {
  //   dispatch(addToCart({ id, name, description, image, price }));
  // };

  // const addItemToFavorites = () => {
  //   dispatch(addToFavorites({ id, name, description, image, price }));
  // };

  //@ts-ignore
  const { dispatch } = useContext(Store);
  const updateCartHandler = async (item: any, quantity: any) => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <Pressable
      style={s`h-72 w-48`}
      onPress={() =>
        //@ts-ignore
        navigation.navigate("Product", {
          id,
          name,
          price,
          image,
          description,
        })
      }
    >
      <View style={s`relative h-3/4 mr-4 rounded-lg overflow-hidden mb-1`}>
        {/* product image */}

        <Image
          source={{
            uri: image,
          }}
          style={s`bg-contain h-full w-full `}
        />

        {/* add to favorites button */}

        <TouchableOpacity
          onPress={() => {
            setSelected(!selected);
            // addItemToFavorites();
          }}
          style={s`absolute top-2 right-2`}
        >
          {selected ? (
            <FontAwesome name="heart" size={24} color="red" />
          ) : (
            <Feather name="heart" size={24} color="black" />
          )}
        </TouchableOpacity>

        {/* add to cart button */}

        <TouchableOpacity
          // onPress={addItemToCart}
          style={s`absolute bottom-2 right-2`}
        >
          <Entypo name="squared-plus" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={s`rounded overflow-hidden flex flex-row absolute top-2 left-2 `}
        >
          <View style={s`bg-red-500 px-1 `}>
            <Text style={s`text-white text-xs`}>-20%</Text>
          </View>
          <View style={s`bg-cyan-600 px-1 `}>
            <Text style={s`text-white text-xs`}>New</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={s`capitalize`}>{name}</Text>
        <Text>$ {price}</Text>
      </View>
      <View style={s`flex flex-row`}>
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
        <Entypo name="star" size={14} color="#DAA520" />
      </View>
    </Pressable>
  );
};

export default ProductCard;
