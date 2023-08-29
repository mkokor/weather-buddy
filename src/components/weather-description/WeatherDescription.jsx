import { View, Text } from "react-native";

const WeatherDescription = ({ title, message }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default WeatherDescription;
