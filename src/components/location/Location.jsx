import styles from "./location.style";
import { View, Text, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Location = ({ cityName, countryName }) => {
  return (
    <View style={styles.container}>
      <Entypo name="location-pin" size={80} color="white" />
      <View>
        <Text style={styles.cityName}>{cityName}</Text>
        <View style={styles.countryContainer}>
          <Text style={styles.countryName}>{countryName}</Text>
        </View>
      </View>
    </View>
  );
};

export default Location;
