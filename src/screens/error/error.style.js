import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontFamily: "DMSansBold",
    fontSize: 50,
    textAlign: "center",
    color: "white",
    marginBottom: 8,
    marginTop: 100,
  },
  message: {
    fontFamily: "DMSans",
    textAlign: "center",
    width: 360,
    color: "white",
  },
  background: {
    flex: 1,
    backgroundColor: "#571a16",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorImage: {
    resizeMode: "contain",
    height: 800,
    position: "absolute",
    top: -100,
  },
});

export default styles;
