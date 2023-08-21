import { View, Text } from "react-native";
import { Icon } from "../../index";

const IconWithText = ({ iconName, iconSize, iconColor, text }) => {
  return (
    <View>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text>{text}</Text>
    </View>
  );
};

export default IconWithText;
