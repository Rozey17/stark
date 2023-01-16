import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo, useApollo } from "./lib/graphql.server";
import { Provider } from "react-redux";
import { store } from "./store";
import { StoreProvider } from "./utils/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const client = initializeApollo();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <Provider store={store}>
      <StoreProvider>
        <Navigation />
        <StatusBar style="auto" />
      </StoreProvider>

      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
