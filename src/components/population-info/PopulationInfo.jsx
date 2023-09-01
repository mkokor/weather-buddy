import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";
import styles from "./population.style";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View style={styles.container}>
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
