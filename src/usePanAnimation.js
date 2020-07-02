import { useState, useMemo, useRef } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";

const w = Dimensions.get("window").width;

const timing = (animation, toValue, duration = 400, cb) =>
  Animated.timing(animation, {
    toValue,
    duration,
    useNativeDriver: false,
  }).start(cb);

export const usePanAnimation = () => {
  const [index, setIndex] = useState(0);
  const linearAnimation = useRef(new Animated.Value(0)).current;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
          const progress = Math.abs(dx) / w;
          linearAnimation.setValue(progress * 50);
        },
        onPanResponderRelease: (_, { dx }) => {
          // const back = dx < 0;
          const progress = Math.abs(dx) / w;
          const reset = progress < 0.4;
          if (reset) {
            timing(linearAnimation, 0);
          } else {
            timing(linearAnimation, 50, 100, () => {
              setIndex(index + 1);
              timing(linearAnimation, 100, 320);
            });
          }
        },
      }),
    [index]
  );

  return { panResponder, index, linearAnimation };
};
