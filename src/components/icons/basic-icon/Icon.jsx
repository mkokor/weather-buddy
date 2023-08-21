import { Feather } from "@expo/vector-icons";

const BasicIcon = ({ iconType, iconSize, iconColor }) => {
  return <Feather name={iconType} size={iconSize} color={iconColor} />;
};

export default BasicIcon;
