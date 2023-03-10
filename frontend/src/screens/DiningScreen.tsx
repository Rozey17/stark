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

const DiningScreen = () => {
  const [products, setProducts] = useState([]);
  // Sample Data
  const itemData = products.map((product) => (
    <Product
      key={product._id}
      id={product._id}
      name={product.name}
      price={product.price}
      image={urlForImage(product.image).url()}
      description={product.description}
      item={product}
    />
  ));
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'product' && references(*[_type=="category" && name == 'dining']._id)]`
      )
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <SafeAreaView>
      <FlatGrid
        // itemDimension={130}
        data={itemData}
        // style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => item}
      />
    </SafeAreaView>
  );
};

export default DiningScreen;
