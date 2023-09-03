import UpcomingWeatherCard from "../../components/upcoming-weather-card/UpcomingWeatherCard";
import { weatherTypes } from "../../constants/index";
import styles from "./upcoming-weather.style";
import {
  View,
  FlatList,
  ImageBackground,
  SectionList,
  Text,
} from "react-native";
import moment from "moment";

const UpcomingWeather = ({ weatherData }) => {
  const renderWeatherItem = ({ item }) => (
    <UpcomingWeatherCard
      dateAndTime={item.dt_txt}
      temperatureMax={item.main.temp_max}
      temperatureMin={item.main.temp_min}
      condition={item.weather[0].main}
    />
  );

  const weatherCondition = weatherData[0].weather[0].main;

  const removeDuplicates = (array) => {
    let result = [];
    array.forEach((item) => {
      if (!result.includes(item)) result.push(item);
    });
    return result;
  };

  const groupWeatherByDay = () => {
    let groups = weatherData.map((weather) =>
      moment(weather.dt_txt).format("dddd")
    );
    groups = removeDuplicates(groups);
    groups = groups.map((item) => ({ title: item, data: [[]] }));
    weatherData.forEach((weather) => {
      let day = moment(weather.dt_txt).format("dddd");
      let group = groups.filter((group) => group.title === day)[0];
      group.data[0].push(weather);
    });
    return groups;
  };
  groupWeatherByDay();

  let weatherByDay = groupWeatherByDay(weatherData);

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={weatherTypes[weatherCondition].backgroundImage}
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
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default UpcomingWeather;
