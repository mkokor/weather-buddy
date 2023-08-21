import { View, Text } from "react-native";
import { BasicIcon } from "../../index";

const IconWithText = ({ iconType, iconSize, iconColor, text }) => {
  return (
    <View>
      <BasicIcon
        iconType={iconType}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default IconWithText;
