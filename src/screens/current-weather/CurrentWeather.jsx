import styles from "./current-weather.style";
import { weatherTypes } from "../../constants/index";
import TemperatureInfo from "../../components/temperature-info/TemperatureInfo";
import CurrentWeatherHeading from "../../components/current-weather-heading/CurrentWeatherHeading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { RefreshContext } from "../../contexts/refresh-context";
import {
  View,
  ImageBackground,
  RefreshControl,
  ScrollView,
} from "react-native";

const CurrentWeather = ({ weatherData, location }) => {
  const { refreshing, refresh } = useContext(RefreshContext);

  const {
    main: { temp: temperature },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={weatherTypes[weatherCondition].backgroundImage}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
          >
            <CurrentWeatherHeading
              title={weather[0].description}
              location={location}
            />
            <TemperatureInfo
              temperature={temperature}
              message={weatherTypes[weatherCondition].message}
            />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default CurrentWeather;
