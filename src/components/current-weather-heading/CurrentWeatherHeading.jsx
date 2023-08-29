import { View, Text } from "react-native";
import styles from "./current-weather-heading.style";
import { capitalizeText } from "../../utils/capitalizer";

const CurrentWeatherHeading = ({ title, location }) => {
  const { name: cityName, country: countryName } = location;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{capitalizeText(title)}</Text>
      <Text style={styles.location}>{`${cityName}, ${countryName}`}</Text>
    </View>
  );
};

export default CurrentWeatherHeading;
