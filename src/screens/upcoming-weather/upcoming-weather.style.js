import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#040D12",
  },
  upcomingWeatherContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 60,
    paddingHorizontal: 10,
    marginBottom: 120,
  },
  background: {
    flex: 1,
  },
  backgroungImage: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#E4E4D0",
  },
});

export default styles;
