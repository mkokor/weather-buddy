import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  location: {
    fontFamily: "DMSans",
    color: "white",
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 9,
  },
});

export default styles;
