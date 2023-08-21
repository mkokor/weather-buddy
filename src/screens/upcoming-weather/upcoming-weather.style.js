import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  upcomingWeatherContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  background: {
    flex: 1,
  },
  backgroungImage: {
    flex: 1,
  },
});

export default styles;
