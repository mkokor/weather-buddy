import UpcomingWeatherCard from "../../components/upcoming-weather-card/UpcomingWeatherCard";
import { weatherTypes } from "../../constants/index";
import styles from "./upcoming-weather.style";
import { removeDuplicates } from "../../utils/array-utility";
import moment from "moment";
import {
  View,
  FlatList,
  ImageBackground,
  SectionList,
  Text,
} from "react-native";

const UpcomingWeather = ({ weatherData }) => {
  const currentWeatherCondition = weatherData[0].weather[0].main;

  const renderWeatherItem = ({ item }) => (
    <UpcomingWeatherCard
      dateAndTime={item.dt_txt}
      temperatureMax={item.main.temp_max}
      temperatureMin={item.main.temp_min}
      condition={item.weather[0].main}
    />
  );

  const groupWeatherByDay = () => {
    let groups = weatherData.map((weather) =>
      moment(weather.dt_txt).format("dddd")
    );
    groups = removeDuplicates(groups);
    groups = groups.map((item) => ({ title: item, data: [[]] }));
    weatherData.forEach((weather) => {
      let group = groups.filter(
        (group) => group.title === moment(weather.dt_txt).format("dddd")
      )[0];
      group.data[0].push(weather);
    });
    return groups;
  };

  const weatherByDay = groupWeatherByDay();

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={weatherTypes[currentWeatherCondition].backgroundImage}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.upcomingWeatherContainer}>
          <SectionList
            sections={weatherByDay}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <ImageBackground imageStyle={styles.sectionListContainer}>
                <FlatList
                  data={item}
                  renderItem={renderWeatherItem}
                  keyExtractor={(item) => item.dt_txt}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                />
              </ImageBackground>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={[styles.fontStyling, styles.sectionHeader]}>
                {title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default UpcomingWeather;
