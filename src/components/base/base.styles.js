import { StyleSheet, Dimensions } from "react-native";

const h = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  trees: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cloudsContainer: {
    position: "absolute",
    flex: 1,
  },
  clouds: {
    left: -20,
    marginTop: h * 0.05,
  },
  base: {
    flex: 1,
    backgroundColor: "#D7F7FF",
  },
});
