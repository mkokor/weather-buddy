import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(39, 40, 41, 0.4)",
    borderRadius: 10,
    flexDirection: "row",
  },
  cityName: {
    fontFamily: "DMSansBold",
    fontSize: 40,
    color: "white",
  },
  countryName: {
    color: "white",
    fontFamily: "DMSansBold",
    fontSize: 12,
  },
  countryContainer: {
    flexDirection: "row",
  },
});

export default styles;
