import React from "react";
import { View, Animated } from "react-native";

import Trees from "./trees.svg";
import Clouds from "./clouds.svg";
import { styles } from "./base.styles";

export const Base = ({ children, linearAnimation, ...props }) => {
  return (
    <View style={styles.base} {...props}>
      <Trees height="100%" style={styles.bg} />
      <Animated.View
        style={[
          {
            transform: [{ translateX: linearAnimation }],
          },
          styles.cloudsContainer,
        ]}
      >
        <Clouds style={styles.clouds} />
      </Animated.View>
      {children}
    </View>
  );
};
