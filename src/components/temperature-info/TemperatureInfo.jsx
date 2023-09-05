import styles from "./temperature-info.style";
import { View, Text } from "react-native";

const TemperatureInfo = ({ temperature, message }) => {
  return (
    <View>
      <Text style={styles.temperature}>{`${Math.round(temperature)}°`}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default TemperatureInfo;
