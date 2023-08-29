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
      <Text style={styles.temperature}>{`${temperature}°C`}</Text>
      <Text style={styles.temperatureFeeling}>
        {`Feels Like ${temperatureFeeling}°C`}
      </Text>
      <Text>{`High: ${temperatureMax}°C`}</Text>
      <Text>{`Low: ${temperatureMin}°C`}</Text>
    </View>
  );
};

export default TemperatureInfo;
