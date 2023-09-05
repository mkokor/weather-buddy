import styles from "./sun-movement.style";
import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";
import moment from "moment";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View style={styles.container}>
      <IconWithText
        flexDirection={"column"}
        iconName={"sunrise"}
        iconSize={65}
        iconColor={"white"}
        text={moment(sunriseTime).format("h:mm:ss a")}
      />
      <IconWithText
        flexDirection={"column"}
        iconName={"sunset"}
        iconSize={65}
        iconColor={"white"}
        text={moment(sunsetTime).format("h:mm:ss a")}
      />
    </View>
  );
};

export default SunMovementInfo;
