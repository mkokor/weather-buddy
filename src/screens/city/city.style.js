import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  fullLayoutBox: {
    flex: 1,
  },
  sectionBox: (height, marginTop) => ({
    height: height,
    marginTop: marginTop,
  }),
});

export default styles;
