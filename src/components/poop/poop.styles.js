import { StyleSheet, Dimensions } from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  poopContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
