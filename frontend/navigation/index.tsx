import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ShopScreen from "../screens/ShopScreen";
import LivingScreen from "../screens/LivingScreen";
import DiningScreen from "../screens/DiningScreen";
import FurnitureScreen from "../screens/FurnitureScreen";
import TechScreen from "../screens/TechScreen";
import LightingScreen from "../screens/LightingScreen";
import WishListScreen from "../screens/WishListScreen";
import SearchScreen from "../screens/SearchScreen";
import ProductScreen from "../screens/ProductScreen";
import AccountScreen from "../screens/AccountScreen";
import { AntDesign } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import { colors, tealColor } from "../constants/colors";
const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* name is the title of the header of the screen */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        // hide header
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        //@ts-ignore

        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        //@ts-ignore

        component={CartScreen}
        options={{ presentation: "containedModal" }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
const ShopStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="HomeStack"
//         //@ts-ignore
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//     </HomeStack.Navigator>
//   );
// }

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="ShopScreen"
        //@ts-ignore
        component={ShopScreen}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="Living"
        //@ts-ignore

        component={LivingScreen}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="Dining"
        //@ts-ignore

        component={DiningScreen}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="Furniture"
        //@ts-ignore

        component={FurnitureScreen}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="Lighting"
        //@ts-ignore

        component={LightingScreen}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="Tech"
        //@ts-ignore

        component={TechScreen}
        // options={{ headerShown: false }}
      />
    </ShopStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          // backgroundColor: "#67e8f9",
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        //@ts-ignore
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          // tabBarShowLabel: false,
          headerShown: false,
          // tabBarLabelStyle: {
          //   color: tealColor,
          // },
        }}
      />
      <BottomTab.Screen
        name="Shop"
        //@ts-ignore

        component={ShopStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="nav-icon-grid" size={24} color={color} />
          ),
          // tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Search"
        //@ts-ignore

        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
          // tabBarShowLabel: false,
          // headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Wish List"
        //@ts-ignore

        component={WishListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
          // tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Account"
        //@ts-ignore

        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
          // tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// const ProductScreenBottomTab = createBottomTabNavigator();
// function ProductScreenBottomTabNavigator() {
//   return (
//     <ProductScreenBottomTab.Navigator>
//       <ProductScreenBottomTab.Screen
//         name="Product"
//         //@ts-ignore

//         component={ProductScreen}
//         // options={{ headerShown: false }}
//       />
     
//     </ProductScreenBottomTab.Navigator>
//   );
// }

export default Navigation;
