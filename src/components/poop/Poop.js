import React from "react";
import { View, Animated } from "react-native";

import Cece from "./cece.svg";
import Norman from "./norman.svg";
import { styles } from "./poop.styles";

export const Poop = () => {
  return (
    <View style={styles.poopContainer}>
      <Animated.View style={[]}>{false ? <Cece /> : <Norman />}</Animated.View>
    </View>
  );
};
