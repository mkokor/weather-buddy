import { View, Text } from "react-native";
import styles from "./location.style";
import { Entypo } from "@expo/vector-icons";

const Location = ({ cityName, countryName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <View style={styles.countryContainer}>
        <Entypo name="location-pin" size={30} color="white" />
        <Text style={styles.countryName}>{countryName}</Text>
      </View>
    </View>
  );
};

export default Location;
