import styles from "./app.style";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { Error } from "./src/screens";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontsLoadingError] = useFonts({
    DMSans: require("./assets/fonts/dmsans-regular.ttf"),
    DMSansBold: require("./assets/fonts/dmsans-bold.ttf"),
  });

  const [isLoading, error, weather] = useGetWeather();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  if (weather && weather.list)
    return (
      <View style={styles.applicationWrapper} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Tabs weather={weather} />
        </NavigationContainer>
      </View>
    );

  return (
    <View style={styles.errorWrapper} onLayout={onLayoutRootView}>
      {error || fontsLoadingError ? (
        <Error />
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

export default App;
