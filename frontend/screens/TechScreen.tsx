import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { s } from "react-native-wind";
//@ts-ignore
import backgroundImage from "../assets/images/pexels-laker-6156383.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const TechScreen = () => {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={s`flex-1`}>
      <ImageBackground source={backgroundImage} style={s`flex-1`}>
        <View style={s`p-3`}>
          <Text>Hello</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TechScreen;
