import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    flexDirection: "row",
  },
  cityName: {
    fontFamily: "DMSansBold",
    fontSize: 45,
    color: "black",
  },
  countryName: {
    color: "black",
    fontFamily: "DMSans",
    fontSize: 14,
  },
  countryContainer: {
    flexDirection: "row",
  },
});

export default styles;
