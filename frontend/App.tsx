import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo, useApollo } from "./lib/graphql.server";
import { Provider } from "react-redux";
import { store } from "./store";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast, { BaseToast } from "react-native-toast-message";
import { s } from "react-native-wind";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const client = initializeApollo();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider>
        <Provider store={store}>
          <Navigation />
          <StatusBar style="auto" />
          <Toast config={toastConfig} />
        </Provider>
      </PaperProvider>

      // </RootSiblingParent>
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

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={s`bg-green-200 border-l-green-500`}
      contentContainerStyle={{ padding: 5 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: "",
        color: "#16a34a",
      }}
    />
  ),
};