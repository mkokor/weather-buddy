import { Ionicons } from "@expo/vector-icons";

const WeatherIcon = ({ weatherType, iconSize, iconColor }) => {
  return <Ionicons name={weatherType} size={iconSize} color={iconColor} />;
};

export default WeatherIcon;
