import { View, Text } from "react-native";
import Icon from "../icon/Icon";

const ErrorItem = () => {
  return (
    <View>
      <Icon name={"frown"} size={100} color={"black"} />
      <Text>Sorry, someting went wrong...</Text>
    </View>
  );
};

export default ErrorItem;
