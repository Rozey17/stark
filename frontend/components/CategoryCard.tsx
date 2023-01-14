import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const CategoryCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <Pressable>
      <View style={s`h-24 w-24 mr-3 rounded-lg overflow-hidden`}>
        <Image
          source={{
            uri: image,
          }}
          style={s`object-cover h-full w-full `}
        />
      </View>
      <View>
        <Text style={{ fontFamily: "" }}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
