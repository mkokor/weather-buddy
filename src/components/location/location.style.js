import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  cityName: {
    fontFamily: "DMSansBold",
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  countryName: {
    color: "white",
    fontFamily: "DMSansBold",
    fontSize: 12,
    textAlign: "center",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
