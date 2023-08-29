import { View } from "react-native";
import IconWithText from "../icon-with-text/IconWithText";
import moment from "moment";

const SunMovementInfo = ({ sunriseTime, sunsetTime }) => {
  return (
    <View>
      <IconWithText
        iconName={"sunrise"}
        iconSize={60}
        iconColor={"black"}
        text={moment(sunriseTime).format("h:mm:ss a")}
      />
      <IconWithText
        iconName={"sunset"}
        iconSize={60}
        iconColor={"black"}
        text={moment(sunsetTime).format("h:mm:ss a")}
      />
    </View>
  );
};

export default SunMovementInfo;
