import { View, Text } from "react-native";
import styles from "./temperature-info.style";

const TemperatureInfo = ({
  temperature,
  temperatureFeeling,
  temperatureMax,
  temperatureMin,
}) => {
  return (
    <View>
      <Text style={styles.temperature}>{`${Math.round(temperature)}°C`}</Text>
      <Text style={styles.temperatureFeeling}>
        {`Feels Like ${Math.round(temperatureFeeling)}°C`}
      </Text>
      <Text>{`High: ${Math.round(temperatureMax)}°C`}</Text>
      <Text>{`Low: ${Math.round(temperatureMin)}°C`}</Text>
    </View>
  );
};

export default TemperatureInfo;
