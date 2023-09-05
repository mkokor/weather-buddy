import styles from "./current-weather-heading.style";
import { View, Text } from "react-native";
import { capitalizeText } from "../../utils/capitalizer";
import { Entypo } from "@expo/vector-icons";

const CurrentWeatherHeading = ({ title, location }) => {
  const { name: cityName, country: countryCode } = location;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{capitalizeText(title)}</Text>
      <View style={styles.locationContainer}>
        <Entypo name="location-pin" size={20} color="white" />
        <Text style={styles.location}>{`${cityName}, ${countryCode}`}</Text>
      </View>
    </View>
  );
};

export default CurrentWeatherHeading;
