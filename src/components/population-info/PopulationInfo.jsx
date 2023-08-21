import { View } from "react-native";
import { IconWithText } from "../index";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View>
      <IconWithText
        iconType="user"
        iconSize={100}
        iconColor="black"
        text={populationSize}
      />
    </View>
  );
};

export default PopulationInfo;
