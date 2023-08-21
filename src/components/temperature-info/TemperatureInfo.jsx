import { View, Text } from "react-native";
import styles from "./temperature-info.style";

const TemperatureInfo = ({ temperature, temperatureFeeling }) => {
  return (
    <View>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.temperatureFeeling}>
        Feels Like {temperatureFeeling}°C
      </Text>
      <Text>High: 10</Text>
      <Text>LOw: 7</Text>
    </View>
  );
};

export default TemperatureInfo;
