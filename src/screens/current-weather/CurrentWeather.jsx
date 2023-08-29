import { View, ImageBackground, SafeAreaView, Text } from "react-native";
import styles from "./current-weather.style";
import { weatherTypes } from "../../constants/index";
import TemperatureInfo from "../../components/temperature-info/TemperatureInfo";
import WeatherDescription from "../../components/weather-description/WeatherDescription";
import { images } from "../../constants/index";
import CurrentWeatherHeading from "../../components/current-weather-heading/CurrentWeatherHeading";

const CurrentWeather = ({ weatherData, location }) => {
  const {
    main: { temp: temperature, feels_like: temperatureFeeling },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={images.currentWeatherBackground.snow}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.currentWeatherContainer}>
          <CurrentWeatherHeading
            title={weather[0].description}
            location={location}
          />
          <TemperatureInfo
            temperature={temperature}
            temperatureFeeling={temperatureFeeling}
          />
        </View>
        <WeatherDescription message={weatherTypes[weatherCondition].message} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CurrentWeather;
