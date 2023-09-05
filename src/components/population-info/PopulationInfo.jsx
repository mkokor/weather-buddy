import styles from "./population.style";
import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View>
      <IconWithText
        flexDirection={"row"}
        iconName="user"
        iconSize={40}
        iconColor="white"
        text={populationSize}
      />
    </View>
  );
};

export default PopulationInfo;
