import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  lower: {
    backgroundColor: "#94D8A5",
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
  },
});
