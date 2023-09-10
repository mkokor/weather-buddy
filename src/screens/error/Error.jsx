import styles from "./error.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, View } from "react-native";
import { images } from "../../constants";
import Icon from "../../components/icon/Icon";

const Error = ({ error }) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        {false && <Icon name={"frown"} size={100} color={"black"} />}
        <Text style={styles.heading}>Oops!</Text>
        <Text
          style={styles.message}
        >{`${error.explanation} ${error.advice}`}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Error;
