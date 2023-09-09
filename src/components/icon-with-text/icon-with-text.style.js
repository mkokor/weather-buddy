import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: (flexDirection, gap) => ({
    flexDirection: flexDirection,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    gap: gap,
  }),
  text: (color) => ({
    fontFamily: "DMSansBold",
    color: color,
    fontSize: 15,
  }),
});

export default styles;
