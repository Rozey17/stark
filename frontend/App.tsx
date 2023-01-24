import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Toast, { BaseToast } from "react-native-toast-message";
import { s } from "react-native-wind";
import { Provider as PaperProvider } from "react-native-paper";
import useCachedResources from "./src/hooks/useCachedResources";
import { store } from "./src/store";
import Navigation from "./src/navigation";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ToastProvider>
        <PaperProvider>
          <Provider store={store}>
            <Navigation />
            <StatusBar style="auto" />
          </Provider>
        </PaperProvider>
      </ToastProvider>
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




