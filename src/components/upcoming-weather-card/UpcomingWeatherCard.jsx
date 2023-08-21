import { View, Text } from "react-native";
import { Icon } from "../index";
import styles from "./upcoming-weather-card.style";

const UpcomingWeatherCard = ({
  dateAndTime,
  temperatureMax,
  temperatureMin,
  condition,
}) => {
  return (
    <View style={styles.container}>
      <Icon iconType="sunny" iconSize={100} iconColor="black" />
      <Text>{dateAndTime}</Text>
      <Text>{temperatureMax}</Text>
      <Text>{temperatureMin}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

export default UpcomingWeatherCard;
