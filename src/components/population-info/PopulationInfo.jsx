import styles from "./population.style";
import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";

const PopulationInfo = ({ populationSize }) => {
  return (
    <View style={styles.container}>
      <IconWithText
        flexDirection={"row"}
        iconName="user"
        iconSize={30}
        themeColor="black"
        text={populationSize}
        gap={2}
      />
    </View>
  );
};

export default PopulationInfo;
