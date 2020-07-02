import React from "react";
import { View, Animated, Dimensions } from "react-native";

import Trees from "./trees.svg";
import Clouds from "./clouds.svg";
import { styles } from "./base.styles";

const w = Dimensions.get("window").width;

export const Base = ({ children, linearAnimation, ...props }) => {
  return (
    <View style={styles.base} {...props}>
      <Trees height="100%" style={styles.bg} />
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: linearAnimation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -w * 2],
                }),
              },
            ],
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
