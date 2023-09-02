import UpcomingWeatherCard from "../../components/upcoming-weather-card/UpcomingWeatherCard";
import { images } from "../../constants/index";
import styles from "./upcoming-weather.style";
import { View, FlatList, ImageBackground } from "react-native";

const UpcomingWeather = ({ weatherData }) => {
  const renderWeatherItem = ({ item }) => (
    <UpcomingWeatherCard
      dateAndTime={item.dt_txt}
      temperatureMax={item.main.temp_max}
      temperatureMin={item.main.temp_min}
      condition={item.weather[0].main}
    />
  );

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={images.upcomingWeatherBackgroun} // Correct error!
        style={styles.background}
        imageStyle={styles.backgroungImage}
      >
        <View style={styles.upcomingWeatherContainer}>
          <FlatList
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            data={weatherData}
            renderItem={renderWeatherItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default UpcomingWeather;
