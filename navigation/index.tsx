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
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        //@ts-ignore
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <HomeStack.Screen
        name="Product"
        //@ts-ignore

        component={ProductScreen}
        // options={{ headerShown: false }}
      /> */}
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        //@ts-ignore
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="#D3D3D3" />,
          // tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        //@ts-ignore

        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Fontisto name="nav-icon-grid" size={24} color="#D3D3D3" />
          ),
          // tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Test"
        //@ts-ignore

        component={HomeScreen}
        options={{
          tabBarIcon: () => <Feather name="search" size={24} color="#D3D3D3" />,
          // tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="WishList"
        //@ts-ignore

        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="heart" size={24} color="#D3D3D3" />,
          // tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="account"
        //@ts-ignore

        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user-alt" size={24} color="#D3D3D3" />
          ),
          // tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;
