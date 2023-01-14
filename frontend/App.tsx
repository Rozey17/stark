import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo, useApollo } from "./lib/graphql.server";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const client = initializeApollo();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
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
