import { View } from "react-native";
import { IconWithText } from "../index";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View>
      <IconWithText
        iconType={"sunrise"}
        iconSize={60}
        iconColor={"black"}
        text={sunriseTime}
      />
      <IconWithText
        iconType={"sunset"}
        iconSize={60}
        iconColor={"black"}
        text={sunsetTime}
      />
    </View>
  );
};

export default SunMovementInfo;
