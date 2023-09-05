import styles from "./current-weather.style";
import { View, ImageBackground } from "react-native";
import { weatherTypes } from "../../constants/index";
import TemperatureInfo from "../../components/temperature-info/TemperatureInfo";
import CurrentWeatherHeading from "../../components/current-weather-heading/CurrentWeatherHeading";
import { SafeAreaView } from "react-native-safe-area-context";

const CurrentWeather = ({ weatherData, location }) => {
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
        <SafeAreaView style={styles.currentWeatherContainer}>
          <CurrentWeatherHeading
            title={weather[0].description}
            location={location}
          />
          <TemperatureInfo
            temperature={temperature}
            message={weatherTypes[weatherCondition].message}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default CurrentWeather;
