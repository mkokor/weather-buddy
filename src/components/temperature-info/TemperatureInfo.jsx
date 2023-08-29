import { View, Text } from "react-native";
import styles from "./temperature-info.style";

const TemperatureInfo = ({ temperature, temperatureFeeling }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{`${Math.round(temperature)}°`}</Text>
      <Text style={styles.temperatureFeeling}>
        {`Feels Like ${Math.round(temperatureFeeling)}°C`}
      </Text>
    </View>
  );
};

export default TemperatureInfo;
