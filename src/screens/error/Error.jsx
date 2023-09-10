import styles from "./error.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, ImageBackground } from "react-native";
import { images } from "../../constants/index";

const Error = ({ error }) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={images.sadCloud} style={styles.errorImage} />
        <Text style={styles.heading}>Oops!</Text>
        <Text
          style={styles.message}
        >{`${error.explanation} ${error.advice}`}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Error;
