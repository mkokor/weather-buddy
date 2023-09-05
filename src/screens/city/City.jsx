import styles from "./city.style";
import { images } from "../../constants/index";
import { ImageBackground, View } from "react-native";
import PopulationInfo from "../../components/population-info/PopulationInfo";
import SunMovementInfo from "../../components/sun-movement-info/SunMovementInfo";
import Location from "../../components/location/Location";
import { getCountryName } from "../../utils/country-name-getter";
import { SafeAreaView } from "react-native-safe-area-context";

const City = ({ cityData }) => {
  const {
    name: cityName,
    country: countryCode,
    population: populationSize,
    sunrise: sunriseTime,
    sunset: sunsetTime,
  } = cityData;

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={images.cityBackground}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.layoutBox(1)}>
            <Location
              cityName={cityName}
              countryName={getCountryName(countryCode)}
            />
          </View>
          <View style={styles.layoutBox(2)}>
            <PopulationInfo populationSize={populationSize} />
          </View>
          <View style={styles.layoutBox(4)}>
            <SunMovementInfo
              sunriseTime={sunriseTime}
              sunsetTime={sunsetTime}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default City;
