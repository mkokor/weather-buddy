import styles from "./icon-with-text.style";
import { View, Text } from "react-native";
import Icon from "../icon/Icon";

const IconWithText = ({
  flexDirection,
  iconName,
  iconSize,
  iconColor,
  text,
}) => {
  return (
    <View style={styles.container(flexDirection)}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IconWithText;
