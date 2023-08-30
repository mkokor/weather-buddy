import { View, Text } from "react-native";
import styles from "./temperature-info.style";

const TemperatureInfo = ({ temperature, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{`${Math.round(temperature)}°`}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default TemperatureInfo;
