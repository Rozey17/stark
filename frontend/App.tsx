import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";

import { Provider } from "react-redux";

import Toast, { BaseToast } from "react-native-toast-message";
import { s } from "react-native-wind";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/useCachedResources";
import { store } from "./src/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
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


