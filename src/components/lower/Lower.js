import React from "react";
import { View, Animated } from "react-native";

import CircleBg from "./circle.svg";
import { styles } from "./lower.styles";

export const Lower = ({ linearAnimation }) => {
  const rotate = linearAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "-90deg"],
  });
  return (
    <View style={styles.base}>
      <View style={styles.lower} />
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ rotate }],
          },
        ]}
      >
        <CircleBg height="100%" width="100%" />
      </Animated.View>
    </View>
  );
};
