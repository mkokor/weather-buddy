import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontFamily: "DMSansBold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  location: {
    fontFamily: "DMSans",
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 9,
  },
});

export default styles;
