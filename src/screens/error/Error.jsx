import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import Icon from "../../components/icon/Icon";

const Error = () => {
  return (
    <SafeAreaView>
      <View>
        <Icon name={"frown"} size={100} color={"black"} />
        <Text>Sorry, someting went wrong...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Error;
