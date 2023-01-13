import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const ShopScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <SafeAreaView style={s``}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s`flex flex-row justify-between items-center p-3`}>
          <Entypo name="menu" size={24} color="black" />
          <Text>Stark</Text>
          <Entypo name="shopping-cart" size={24} color="black" />
        </View>
        <View style={s`p-3 space-y-2`}>
          <Pressable
            onPress={() => navigation.navigate("Living")}
            style={s`bg-gray-200 mb-2 flex flex-row px-3 p-2 rounded justify-between `}
          >
            <View style={s` flex flex-row justify-between items-center`}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={s`h-16 w-16 object-contain rounded-full mr-3`}
              />
              <Text>Living</Text>
            </View>
            <View style={s` flex flex-row  items-center`}>
              <View style={s`rounded bg-gray-400 py-1 px-2`}>
                <Text style={s`text-gray-500 font-semibold text-xs`}>2</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Dining")}
            style={s`bg-gray-200 mb-2 flex flex-row px-3 p-2 rounded justify-between`}
          >
            <View style={s` flex flex-row justify-between items-center`}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
                }}
                style={s`h-16 w-16 object-contain rounded-full mr-3`}
              />
              <Text>Dining</Text>
            </View>
            <View style={s` flex flex-row  items-center`}>
              <View style={s`rounded bg-gray-400 py-1 px-2`}>
                <Text style={s`text-gray-500 font-semibold text-xs`}>11</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable
            style={s`bg-gray-200 mb-2 flex flex-row px-3 p-2 rounded justify-between`}
            onPress={() => navigation.navigate("Furniture")}
          >
            <View style={s` flex flex-row justify-between items-center`}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={s`h-16 w-16 object-contain rounded-full mr-3`}
              />
              <Text>Furniture</Text>
            </View>
            <View style={s` flex flex-row  items-center`}>
              <View style={s`rounded bg-gray-400 py-1 px-2`}>
                <Text style={s`text-gray-500 font-semibold text-xs`}>7</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable
            style={s`bg-gray-200 mb-2 flex flex-row px-3 p-2 rounded justify-between`}
            onPress={() => navigation.navigate("Lighting")}
          >
            <View style={s` flex flex-row justify-between items-center`}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={s`h-16 w-16 object-contain rounded-full mr-3`}
              />
              <Text>Lighting</Text>
            </View>
            <View style={s` flex flex-row  items-center`}>
              <View style={s`rounded bg-gray-400 py-1 px-2`}>
                <Text style={s`text-gray-500 font-semibold text-xs`}>2</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable
            style={s`bg-gray-200 mb-2 flex flex-row px-3 p-2 rounded justify-between`}
            onPress={() => navigation.navigate("Tech")}
          >
            <View style={s` flex flex-row justify-between items-center`}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
                }}
                style={s`h-16 w-16 object-contain rounded-full mr-3`}
              />
              <Text>Tech</Text>
            </View>
            <View style={s` flex flex-row  items-center`}>
              <View style={s`rounded bg-gray-400 py-1 px-2`}>
                <Text style={s`text-gray-500 font-semibold text-xs`}>2</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
