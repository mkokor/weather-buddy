import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./current-weather.style";
import { weatherTypes } from "../../constants/index";
import {
  Icon,
  TemperatureInfo,
  WeatherDescription,
} from "../../components/index";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.currentWeatherContainer}>
        <Icon name={weatherTypes.clear.iconName} size={100} color="black" />
        <TemperatureInfo temperature={23} temperatureFeeling={20} />
      </View>
      <WeatherDescription description={weatherTypes.clear.message} />
    </SafeAreaView>
  );
};

export default CurrentWeather;
