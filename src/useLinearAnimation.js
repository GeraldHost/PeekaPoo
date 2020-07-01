import { useState, useMemo, useRef } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";

const w = Dimensions.get("window").width;

export const useLinearAnimation = (indexState) => {
  const [index, _] = indexState;
  const linearAnimation = useRef(new Animated.Value(0)).current;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
          const progress = Math.abs(dx) / w;
          linearAnimation.setValue(-(progress * w) - w * index);
        },
        onPanResponderRelease: (event, { dx, moveX }) => {
          // const back = dx < 0;
          // const progress = Math.abs(dx) / w;
          // const reset = progress < 0.4;

          Animated.timing(linearAnimation, {
            toValue: 0 - w * index,
            duration: 400,
            useNativeDriver: true,
          }).start();
        },
      }),
    [index]
  );

  return { panResponder, index, linearAnimation };
};
