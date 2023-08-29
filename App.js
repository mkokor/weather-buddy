import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import * as Location from "expo-location";
import environment from "./src/config/environment";
import axios from "axios";
import { useGetWeatherData } from "./src/hooks/useGetWeatherData";

const App = () => {
  const [isLoading, error, weatherData] = useGetWeatherData();

  console.log(isLoading);
  console.log(error);
  console.log(weatherData);

  if (isLoading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
