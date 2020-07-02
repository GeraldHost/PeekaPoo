import React from "react";
import { View, Animated, Dimensions } from "react-native";

import Trees from "./trees.svg";
import Clouds from "./clouds.svg";
import { styles } from "./base.styles";
import { GradientBackground } from "./Gradient";

const w = Dimensions.get("window").width;

const AnimatedGradient = Animated.createAnimatedComponent(GradientBackground);

export const Base = ({ children, linearAnimation, ...props }) => {
  const colour1 = linearAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ["#D7F7FF", "#F08CA2"],
    extrapolate: "clamp",
  });

  const colour2 = linearAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ["#D7F7FF", "#F8D490"],
    extrapolate: "clamp",
  });

  return (
    <AnimatedGradient
      to={colour2}
      from={colour1}
      style={styles.base}
      {...props}
    >
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
    </AnimatedGradient>
  );
};
