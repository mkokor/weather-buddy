import styles from "./location.style";
import { View, Text } from "react-native";

const Location = ({ cityName, countryName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <View style={styles.countryContainer}>
        <Text style={styles.countryName}>{countryName}</Text>
      </View>
    </View>
  );
};

export default Location;
