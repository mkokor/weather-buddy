import { View, Text } from "react-native";

const Location = ({ city, state }) => {
  return (
    <View>
      <Text>{city}</Text>
      <Text>{state}</Text>
    </View>
  );
};

export default Location;
