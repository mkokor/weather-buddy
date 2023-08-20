import { View, SafeAreaView } from "react-native";
import styles from "./current-weather.style";
import {
  WeatherIcon,
  TemperatureInfo,
  WeatherDescription,
} from "../../components/index";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.currentWeatherContainer}>
        <WeatherIcon weatherType={"sunny"} iconSize={100} iconColor="black" />
        <TemperatureInfo temperature={23} temperatureFeeling={20} />
      </View>
      <WeatherDescription description={"It' sunny!"} />
    </SafeAreaView>
  );
};

export default CurrentWeather;
