import React from "react";
import { StyleSheet, View } from "react-native";

import Trees from "./components/base/trees.svg";
import CircleBg from "./components/lower/circle.svg";

import { baseStyles, lowerStyles } from "./components";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#D7F7FF",
  },
});

const Welcome = () => {
  return (
    <View style={styles.base}>
      <View style={lowerStyles.lower} />
      <Trees height="100%" style={baseStyles.trees} />
      <View style={lowerStyles.circle}>
        <CircleBg height="100%" width="100%" />
      </View>
    </View>
  );
}

export default Welcome;