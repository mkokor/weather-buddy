import { View, ImageBackground, SafeAreaView, Text } from "react-native";
import styles from "./current-weather.style";
import { weatherTypes } from "../../constants/index";
import TemperatureInfo from "../../components/temperature-info/TemperatureInfo";
import CurrentWeatherHeading from "../../components/current-weather-heading/CurrentWeatherHeading";

const CurrentWeather = ({ weatherData, location }) => {
  const {
    main: { temp: temperature },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={weatherTypes["Mist"].backgroundImage}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.currentWeatherContainer}>
          <CurrentWeatherHeading
            title={weather[0].description}
            location={location}
          />
          <TemperatureInfo
            temperature={temperature}
            message={weatherTypes[weatherCondition].message}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CurrentWeather;
