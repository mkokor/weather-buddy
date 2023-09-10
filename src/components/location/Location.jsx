import styles from "./location.style";
import { View, Text, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Location = ({ cityName, countryName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cityContainer}>
        <Entypo name="location-pin" size={47} color="black" />
        <Text style={styles.cityName}>{cityName}</Text>
      </View>
      <View style={styles.countryContainer}>
        <Text style={styles.countryName}>{countryName}</Text>
      </View>
    </View>
  );
};

export default Location;
