import { View, Text, ImageBackground } from "react-native";
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
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
const TechScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  // Sample Data
  const itemData = products.map((product) => (
    <Product key={product._id} item={product} />
  ));
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'product' && references(*[_type=="category" && name == 'Tech']._id)]`
      )
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <SafeAreaView style={s`h-full`}>
      <Header arrow={true} title="Tech" />
      <FlatGrid
        // itemDimension={130}
        data={itemData}
        // style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => item}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

export default TechScreen;
