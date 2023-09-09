import styles from "./icon-with-text.style";
import { View, Text } from "react-native";
import Icon from "../icon/Icon";

const IconWithText = ({
  flexDirection,
  iconName,
  iconSize,
  themeColor,
  text,
  gap,
}) => {
  return (
    <View style={styles.container(flexDirection, gap)}>
      <Icon name={iconName} size={iconSize} color={themeColor} />
      <Text style={styles.text(themeColor)}>{text}</Text>
    </View>
  );
};

export default IconWithText;
