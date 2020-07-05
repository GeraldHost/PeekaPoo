import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
  },
  lower: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: windowHeight * 0.3,
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    top: windowHeight * 0.59,
    width: windowHeight * 2,
    height: windowHeight * 2,
  },
});
