import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./current-weather.style";
import { weatherTypes } from "../../constants/index";
import Icon from "../../components/icon/Icon";
import TemperatureInfo from "../../components/temperature-info/TemperatureInfo";
import WeatherDescription from "../../components/weather-description/WeatherDescription";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: {
      temp: temperature,
      feels_like: temperatureFeeling,
      temp_max: temperatureMax,
      temp_min: temperatureMin,
    },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={styles.wrapper(weatherTypes[weatherCondition].backgroundColor)}
    >
      <View style={styles.currentWeatherContainer}>
        <Icon
          name={weatherTypes[weatherCondition].iconName}
          size={100}
          color="black"
        />
        <TemperatureInfo
          temperature={temperature}
          temperatureFeeling={temperatureFeeling}
          temperatureMax={temperatureMax}
          temperatureMin={temperatureMin}
        />
      </View>
      <WeatherDescription
        title={weather[0].description}
        message={weatherTypes[weatherCondition].message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;
