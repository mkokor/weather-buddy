import styles from "./city.style";
import { images } from "../../constants/index";
import { ImageBackground, View, SafeAreaView } from "react-native";
import {
  PopulationInfo,
  SunMovementInfo,
  Location,
} from "../../components/index";

const City = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={images.cityBackground}
        style={styles.background}
        imageStyle={styles.backgroungImage}
      >
        <View style={styles.cityContainer}>
          <Location city="London" state="UK" />
          <PopulationInfo populationSize={8000} />
          <SunMovementInfo sunriseTime="05:30:00am" sunsetTime="20:00:00pm" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
