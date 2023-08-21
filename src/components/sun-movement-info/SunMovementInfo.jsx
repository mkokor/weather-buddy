import { View, Text } from "react-native";
import { Icon } from "../index";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View>
      <Icon iconType={"sunrise"} iconSize={60} iconColor={"black"} />
      <Text>{sunriseTime}</Text>
      <Icon iconType={"sunset"} iconSize={60} iconColor={"black"} />
      <Text>{sunsetTime}</Text>
    </View>
  );
};

export default SunMovementInfo;
