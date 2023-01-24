import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";

const CategoryCard = ({ image, name }: { image: string; name: string }) => {
  const navigation = useNavigation();
  //@ts-ignore
  const onPressHandler = () => navigation.navigate(`${name}`);
  return (
    <Pressable onPress={onPressHandler}>
      <View
        style={s`h-28 w-28 mr-3 rounded-lg overflow-hidden mb-1 shadow border border-gray-300`}
      >
        <Image
          source={{
            uri: image,
          }}
          style={s`object-contain h-full w-full  `}
        />
      </View>

      <View>
        <Text
          style={{ fontFamily: "jost-medium", textTransform: "capitalize" }}
        >
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
