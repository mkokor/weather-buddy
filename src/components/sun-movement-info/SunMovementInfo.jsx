import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View>
      <IconWithText
        iconName={"sunrise"}
        iconSize={60}
        iconColor={"black"}
        text={sunriseTime}
      />
      <IconWithText
        iconName={"sunset"}
        iconSize={60}
        iconColor={"black"}
        text={sunsetTime}
      />
    </View>
  );
};

export default SunMovementInfo;
