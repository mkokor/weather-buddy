import styles from "./sun-movement.style";
import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";
import moment from "moment";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View style={styles.container}>
      <IconWithText
        flexDirection="column"
        iconName="sunrise"
        iconSize={65}
        themeColor="black"
        text={moment(sunriseTime).format("HH:mm:ss")}
        gap={1}
      />
      <IconWithText
        flexDirection="column"
        iconName="sunset"
        iconSize={65}
        themeColor="black"
        text={moment(sunsetTime).format("HH:mm:ss")}
        gap={1}
      />
    </View>
  );
};

export default SunMovementInfo;
