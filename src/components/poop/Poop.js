import React from "react";
import { View, Animated } from "react-native";

import Cece from "./cece.svg";
import Norman from "./norman.svg";
import { styles } from "./poop.styles";

export const Poop = ({ linearAnimation, index }) => {
  return (
    <View style={styles.poopContainer}>
      <Animated.View
        style={{
          transform: [
            {
              scale: linearAnimation.interpolate({
                inputRange: [0, 50, 100, 150, 200],
                outputRange: [1, 0, 1, 0, 1],
              }),
            },
          ],
        }}
      >
        {index % 2 ? <Cece /> : <Norman />}
      </Animated.View>
    </View>
  );
};
