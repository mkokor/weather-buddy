import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: (backgroundColor) => ({
    flex: 1,
    backgroundColor: backgroundColor,
  }),
  currentWeatherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
