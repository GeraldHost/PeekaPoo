import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

import Bg from "./norman-background.svg";
import CeceBg from "./cece-background.svg";
import Norman from "./norman.svg";
import Cece from "./cece.svg";
import Clouds from "./clouds.svg";
import Trees from "./trees.svg";

const w = Dimensions.get("window").width;

export default function App() {
  const [state, setState] = useState(0);
  const ani = useRef(new Animated.Value(1)).current;
  const cloudAni = useRef(new Animated.Value(0)).current;
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, { dx }) => {
          const progress = 1 - Math.abs(dx) / w;
          ani.setValue(progress);
          cloudAni.setValue(-((Math.abs(dx) / w) * w) - w * state);
        },
        onPanResponderRelease: (event, { dx, moveX }) => {
          const back = dx < 0;
          const progress = Math.abs(dx) / w;
          const reset = progress < 0.4;
          if (reset) {
            Animated.timing(ani, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }).start();
            Animated.timing(cloudAni, {
              toValue: 0 - w * state,
              duration: 400,
              useNativeDriver: true,
            }).start();
          } else {
            Animated.timing(ani, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              // TODO: not sure if this is the best solution or if should use sequence
              setState((state + 1) % 2);
              Animated.timing(ani, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
              }).start();
            });
            Animated.timing(cloudAni, {
              toValue: -w * (state + 1),
              duration: 400,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
    [state]
  );

  return (
    <>
      <View style={styles.base} {...panResponder.panHandlers}>
        <View style={[styles.base, styles.upper]} />
        <View style={[styles.base, styles.lower]} />
        <Trees height="100%" style={styles.bg} />
        <View style={styles.bg}>
          <Bg height="100%" style={styles.bg} />
        </View>
        <CeceBg height="100%" style={styles.bg} />
        <Animated.View
          style={[
            {
              transform: [{ translateX: cloudAni }],
            },
            styles.cloudsContainer,
          ]}
        >
          <Clouds style={styles.clouds} />
        </Animated.View>
        <View style={styles.poopContainer}>
          <Animated.View
            style={{
              transform: [{ scale: ani }],
            }}
          >
            {state % 2 ? <Cece /> : <Norman />}
          </Animated.View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  poopContainer: {
    position: "absolute",
    top: 60,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  cloudsContainer: {
    position: "absolute",
    flex: 1,
  },
  clouds: {
    left: -20,
    marginTop: 50,
  },
  base: {
    flex: 1,
  },
  upper: {
    flex: 2,
    backgroundColor: "#D7F7FF",
  },
  lower: {
    backgroundColor: "#94D8A5",
  },
});
