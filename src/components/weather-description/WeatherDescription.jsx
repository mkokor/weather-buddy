import { View, Text } from "react-native";

const WeatherDescription = ({ description }) => {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
};

export default WeatherDescription;
