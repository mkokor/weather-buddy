import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  cityContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight: 10,
  },
  cityName: {
    fontFamily: "DMSansBold",
    fontSize: 45,
    color: "black",
  },
  countryName: {
    color: "black",
    fontFamily: "DMSans",
    fontSize: 15,
  },
  countryContainer: {
    flexDirection: "row",
  },
});

export default styles;
