import { View, Text } from "react-native";

const Location = ({ cityName, countryName }) => {
  return (
    <View>
      <Text>{cityName}</Text>
      <Text>{countryName}</Text>
    </View>
  );
};

export default Location;
