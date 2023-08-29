import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [isLoading, error, weather] = useGetWeather();

  if (weather && weather.list)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default App;
