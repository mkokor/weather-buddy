import { Feather } from "@expo/vector-icons";

const Icon = ({ iconType, iconSize, iconColor }) => {
  return <Feather name={iconType} size={iconSize} color={iconColor} />;
};

export default Icon;
