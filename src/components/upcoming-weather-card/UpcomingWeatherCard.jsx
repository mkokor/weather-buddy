import { View, Text } from "react-native";
import Icon from "../icon/Icon";
import styles from "./upcoming-weather-card.style";
import { weatherTypes } from "../../constants";
import moment from "moment";

const UpcomingWeatherCard = ({
  dateAndTime,
  temperatureMax,
  temperatureMin,
  condition,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={weatherTypes[condition].iconName} size={100} color="black" />
      <View>
        <Text>{moment(dateAndTime).format("dddd")}</Text>
        <Text>{moment(dateAndTime).format("h:mm:ss a")}</Text>
      </View>
      <Text>{`${Math.round(temperatureMax)}°C`}</Text>
      <Text>{`${Math.round(temperatureMin)}°C`}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

export default UpcomingWeatherCard;
