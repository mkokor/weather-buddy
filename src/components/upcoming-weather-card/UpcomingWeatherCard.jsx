import { View, Text } from "react-native";
import { WeatherIcon } from "../index";
import styles from "./upcoming-weather-card.style";

const UpcomingWeatherCard = ({
  dateAndTime,
  temperatureMax,
  temperatureMin,
  condition,
}) => {
  return (
    <View style={styles.container}>
      <WeatherIcon weatherType="sunny" iconSize={100} iconColor="black" />
      <Text>{dateAndTime}</Text>
      <Text>{temperatureMax}</Text>
      <Text>{temperatureMin}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

export default UpcomingWeatherCard;
