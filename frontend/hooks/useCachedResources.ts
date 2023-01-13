import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "poppins-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
