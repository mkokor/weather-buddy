import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import * as Location from "expo-location";
import environment from "./src/config/environment";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(environment.testKey);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied.");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  if (location) console.log(location);

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
