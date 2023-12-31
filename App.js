import styles from "./app.style";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/tabs/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { Error } from "./src/screens";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import NetInfo from "@react-native-community/netinfo";
import { errorTypes } from "./src/constants/index";
import { View, ActivityIndicator } from "react-native";
import RefreshContextProvider from "./src/contexts/refresh-context";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontsLoadingError] = useFonts({
    DMSans: require("./assets/fonts/dmsans-regular.ttf"),
    DMSansBold: require("./assets/fonts/dmsans-bold.ttf"),
  });

  const [isOnline, setIsOnline] = useState(false);

  const [isLoading, weatherFetchingError, weather, refetchWetherData] =
    useGetWeather();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    const updateOnlineStatus = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
    });
    return () => updateOnlineStatus();
  }, []);

  if (!fontsLoaded) return null;

  if (weather && weather.list)
    return (
      <RefreshContextProvider refreshFunction={refetchWetherData}>
        <View style={styles.applicationWrapper} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <Tabs weather={weather} />
          </NavigationContainer>
        </View>
      </RefreshContextProvider>
    );

  return (
    <View style={styles.applicationWrapper} onLayout={onLayoutRootView}>
      {!isOnline || weatherFetchingError || fontsLoadingError ? (
        <Error
          error={
            (!isOnline && errorTypes.NoInternetConnectionError) ||
            weatherFetchingError ||
            (fontsLoadingError && errorTypes.InternalError)
          }
        />
      ) : (
        <View style={styles.centralizedBox}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
    </View>
  );
};

export default App;
