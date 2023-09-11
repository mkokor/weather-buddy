import styles from "./city.style";
import { images } from "../../constants/index";
import PopulationInfo from "../../components/population-info/PopulationInfo";
import SunMovementInfo from "../../components/sun-movement-info/SunMovementInfo";
import Location from "../../components/location/Location";
import { getCountryName } from "../../utils/country-name-getter";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshContext } from "../../contexts/refresh-context";
import { useContext } from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

const City = ({ cityData }) => {
  const { refreshing, refresh } = useContext(RefreshContext);

  const {
    name: cityName,
    country: countryCode,
    population: populationSize,
    sunrise: sunriseTime,
    sunset: sunsetTime,
  } = cityData;

  return (
    <View style={styles.fullLayoutBox}>
      <ImageBackground
        source={images.cityBackground}
        style={styles.fullLayoutBox}
        imageStyle={styles.fullLayoutBox}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
          >
            <View style={styles.sectionBox(100, 50)}>
              <Location
                cityName={cityName}
                countryName={getCountryName(countryCode)}
              />
            </View>
            <View style={styles.sectionBox(100, 0)}>
              <PopulationInfo populationSize={populationSize} />
            </View>
            <View style={styles.sectionBox(100, 0)}>
              <SunMovementInfo
                sunriseTime={sunriseTime}
                sunsetTime={sunsetTime}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default City;
