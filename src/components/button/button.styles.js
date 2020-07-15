import { StyleSheet } from "react-native";
import { scale } from "../Text";

export const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: scale(100),
    height: scale(100),
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: scale(20),
  },
});
