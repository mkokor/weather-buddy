import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "lightwhite",
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  currentWeatherContainer: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 80,
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
});

export default styles;
