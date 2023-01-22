import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "react-native-wind";
//@ts-ignore
import backgroundImage from "../assets/images/pexels-laker-6156383.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { client } from "../lib/sanity.server";
import Product from "../components/Product";
import { ScrollView } from "react-native-gesture-handler";
import { urlForImage } from "../lib/sanity";
import { FlatGrid } from "react-native-super-grid";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LightingScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  // Sample Data
  const itemData = products.map((product) => (
    <Product key={product._id} item={product} />
  ));
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'product' && references(*[_type=="category" && name == 'lighting']._id)]`
      )
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <SafeAreaView>
      {/* <View style={s`p-5 bg-white flex-row justify-between items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={s`font-bold text-center`}>Living</Text>
      </View> */}
      <FlatGrid
        // itemDimension={130}
        data={itemData}
        // style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        renderItem={({ item }) => item}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default LightingScreen;
