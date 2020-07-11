import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Base } from "./components/base";
import { Poop } from "./components/poop";
import { Lower } from "./components/lower";
import { usePanAnimation } from "./usePanAnimation";
import { TouchableOpacity } from "react-native-gesture-handler";

const h = Dimensions.get("window").height;

// TODO: abstract button component
const styles = StyleSheet.create({
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default function PoopSelect() {
  const { linearAnimation, panResponder, index } = usePanAnimation();
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower linearAnimation={linearAnimation} />
      <Poop linearAnimation={linearAnimation} index={index} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Select</Text>
        </View>
      </View>
    </Base>
  );
}
