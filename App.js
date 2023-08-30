import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { Error } from "./src/screens";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    DMSans: require("./assets/fonts/dmsans-regular.ttf"),
  });

  const [isLoading, error, weather] = useGetWeather();

  if (fontsLoaded && weather && weather.list)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {error ? <Error /> : <ActivityIndicator size="large" color="black" />}
    </View>
  );
};

export default App;
