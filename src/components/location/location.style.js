import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  cityName: {
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
  },
  countryName: {
    color: "white",
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontSize: 15,
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
