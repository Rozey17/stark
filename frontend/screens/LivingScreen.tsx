import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "react-native-wind";
//@ts-ignore
import backgroundImage from "../assets/images/pexels-laker-6156383.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { client } from "../lib/sanity.server";
import ProductCard from "../components/ProductCard";
import { ScrollView } from "react-native-gesture-handler";
import { urlForImage } from "../lib/sanity";

const LivingScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'product' && references(*[_type=="category" && name == 'living']._id)]`
      )
      .then((res) => {
        setProducts(res);
      });
  }, []);
  return (
    <SafeAreaView edges={["bottom", "left", "right", "top"]} style={s`flex-1`}>
      {/* <ImageBackground source={backgroundImage} style={s`flex-1`}>
        <View style={s`p-3`}>
          <Text>Hello</Text>
        </View>
      </ImageBackground> */}
      <View>
        <ScrollView style={s``}>
          <View style={s`flex-row flex-1`}>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={urlForImage(product.image).url()}
                description={product.description}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LivingScreen;
