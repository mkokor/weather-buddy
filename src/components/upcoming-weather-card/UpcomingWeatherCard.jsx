import { View, Text } from "react-native";
import Icon from "../icon/Icon";
import styles from "./upcoming-weather-card.style";

const UpcomingWeatherCard = ({
  dateAndTime,
  temperatureMax,
  temperatureMin,
  condition,
}) => {
  return (
    <View style={styles.container}>
      <Icon name="sun" size={100} color="black" />
      <Text>{dateAndTime}</Text>
      <Text>{temperatureMax}</Text>
      <Text>{temperatureMin}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

export default UpcomingWeatherCard;
