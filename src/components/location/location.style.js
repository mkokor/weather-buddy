import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 0,
    //backgroundColor: "rgba(39, 40, 41, 0.4)",
    borderRadius: 10,
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
