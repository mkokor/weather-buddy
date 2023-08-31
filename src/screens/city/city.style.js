import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cityContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  layoutBox: (size) => ({
    flex: size,
    justifyContent: "center",
    alignItems: "center",
  }),
});

export default styles;
