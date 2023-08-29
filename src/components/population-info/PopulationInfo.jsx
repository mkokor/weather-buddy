import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View>
      <IconWithText
        name="user"
        size={100}
        color="black"
        text={populationSize}
      />
    </View>
  );
};

export default PopulationInfo;
