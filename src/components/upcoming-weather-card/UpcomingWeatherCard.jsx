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
        <Text style={[styles.day, styles.fontStyling]}>
          {moment(dateAndTime).format("dddd")}
        </Text>
        <Text style={[styles.time, styles.fontStyling]}>
          {moment(dateAndTime).format("h:mm:ss a")}
        </Text>
      </View>
      <View style={styles.weatherInfoContainer}>
        {false && (
          <Icon
            name={weatherTypes[condition].iconName}
            size={70}
            color="white"
          />
        )}
        <Text style={[styles.fontStyling]}>{condition}</Text>
        <Text style={[styles.fontStyling]}>{`High: ${Math.round(
          temperatureMax
        )}°`}</Text>
        <Text style={[styles.fontStyling]}>{`Low: ${Math.round(
          temperatureMin
        )}°`}</Text>
      </View>
    </View>
  );
};

export default UpcomingWeatherCard;
