import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#040D12",
  },
  upcomingWeatherContainer: {
    flex: 1,
    paddingTop: 30,
    marginBottom: 120,
    paddingHorizontal: 8,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: "#E4E4D0",
  },
  sectionHeader: {
    fontFamily: "DMSansBold",
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  sectionListContainer: {
    backgroundColor: "#272829",
    borderRadius: 10,
    opacity: 0.4,
  },
});

export default styles;
