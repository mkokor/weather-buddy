import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: (flexDirection) => ({
    flexDirection: flexDirection,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  }),
  text: (color) => ({
    fontFamily: "DMSans",
    color: color,
    fontSize: 15,
  }),
});

export default styles;
