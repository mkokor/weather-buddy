import { View, Text } from "react-native";
import { Icon } from "../index";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View>
      <Icon iconType="user" iconSize={100} iconColor="black" />
      <Text>{populationSize}</Text>
    </View>
  );
};

export default PopulationInfo;
