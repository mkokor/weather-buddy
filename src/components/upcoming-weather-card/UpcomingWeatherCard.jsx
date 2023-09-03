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
      <View style={styles.dateAndTimeContainer}>
        <Text style={[styles.time, styles.fontStyling]}>
          {moment(dateAndTime).format("HH:mm")}
        </Text>
      </View>
      <View style={styles.weatherInfoContainer}>
        <Icon name={weatherTypes[condition].iconName} size={27} color="white" />
        <Text
          style={[styles.fontStyling, styles.temperatureInfo]}
        >{`${Math.round(temperatureMax)}° / ${Math.round(
          temperatureMin
        )}°`}</Text>
      </View>
    </View>
  );
};

export default UpcomingWeatherCard;
