import { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { s } from "react-native-wind";
import ProductCard from "../components/ProductCard";
import { urlForImage } from "../lib/sanity";
import { client } from "../lib/sanity.server";
import { FlatGrid } from "react-native-super-grid";

function AccountScreen() {
  const [products, setProducts] = useState([]);
  // Sample Data
  const itemData = products.map((product) => (
    <ProductCard
      key={product._id}
      id={product._id}
      name={product.name}
      price={product.price}
      image={urlForImage(product.image).url()}
      description={product.description}
    />
  ));
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
    <FlatGrid
      // itemDimension={130}
      data={itemData}
      // style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={15}
      renderItem={({ item }) => item}
    />
  );
}

export default AccountScreen;
