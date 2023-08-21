import styles from "./city.style";
import { images } from "../../constants/index";
import { Text, ImageBackground, View, SafeAreaView } from "react-native";

const City = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={images.cityBackground}
        style={styles.background}
        imageStyle={styles.backgroungImage}
      >
        <View>
          <Text>City Screen</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
