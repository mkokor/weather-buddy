import { UpcomingWeatherCard } from "../../components/index";
import { images } from "../../constants/index";
import styles from "./upcoming-weather.style";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const data = [
  {
    dt_txt: "2023-06-06 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-06-06 13:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-06-06 14:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderWeatherItem = ({ item }) => (
    <UpcomingWeatherCard
      dateAndTime={item.dt_txt}
      temperatureMax={item.main.temp_max}
      temperatureMin={item.main.temp_min}
      condition={item.weather[0].main}
    />
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={images.upcomingWeatherBackground}
        style={styles.background}
        imageStyle={styles.backgroungImage}
      >
        <View style={styles.upcomingWeatherContainer}>
          <Text>Upcoming Weather</Text>
          <FlatList
            data={data}
            renderItem={renderWeatherItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
