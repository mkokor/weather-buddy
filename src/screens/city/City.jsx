import styles from "./city.style";
import { images } from "../../constants/index";
import { ImageBackground, View, SafeAreaView } from "react-native";
import PopulationInfo from "../../components/population-info/PopulationInfo";
import SunMovementInfo from "../../components/sun-movement-info/SunMovementInfo";
import Location from "../../components/location/Location";

const City = ({ cityData }) => {
  const {
    name: cityName,
    country: countryName,
    population: populationSize,
    sunrise: sunriseTime,
    sunset: sunsetTime,
  } = cityData;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={images.cityBackground}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.cityContainer}>
          <Location cityName={cityName} countryName={countryName} />
          <PopulationInfo populationSize={populationSize} />
          <SunMovementInfo sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
