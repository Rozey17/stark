import { View, Text, TextInput } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={s`p-3`}>
        {/* <Text>SearchScreen</Text> */}
        <TextInput
          placeholder="Search ..."
          style={s`p-2 border border-gray-300 rounded-lg bg-white`}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
