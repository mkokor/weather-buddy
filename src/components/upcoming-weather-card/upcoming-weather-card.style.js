import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 2,
    width: 80,
    gap: 4,
  },
  fontStyling: {
    fontFamily: "DMSans",
    color: "white",
  },
  time: {
    fontSize: 13,
  },
  dateAndTimeContainer: {},
  weatherInfoContainer: {
    alignItems: "center",
    gap: 4,
  },
  temperatureInfo: {
    fontSize: 13,
  },
});

export default styles;
