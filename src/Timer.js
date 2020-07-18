import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { fart } from "./fart";
import { Text, Button, scale } from "./components";
import RainbowBg from "./rainbow-bg.svg";
import Norman from "./components/poop/cece.svg";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  bodyText: {
    color: "white",
    fontSize: scale(40),
  },
  bigText: {
    color: "white",
    margin: -15,
    fontSize: scale(80),
  },
  rainbowContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  rainbow: {
    position: "absolute",
    top: h < 600 ? -(h * 0.15) : 0,
  },
  pooContainer: {
    alignItems: "center",
  },
});

const formatNumber = (n) => `${n.toString().length >= 2 ? "" : "0"}${n}`;

const maybeFart = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const rand = getRandomInt(10);
  console.log(rand);
  if (rand === 3) {
    fart();
  }
};

const Timer = ({ first }) => {
  const time = useRef(null);
  const timerId = useRef(null);
  const [startCountdown, setStartCountdown] = useState(10);
  const [displayTime, setDisplayTime] = useState(false);

  const countingDown = startCountdown > 0;

  const formatTime = (t) => {
    const left = Math.floor(t / 60);
    const right = t % 60;
    return `${formatNumber(left)}:${formatNumber(right)}`;
  };

  const printTime = () => {
    clearTimeout(timerId.current);
    setDisplayTime(formatTime(time.current));
  };

  const foundMe = () => {
    if (!countingDown) printTime();
  };

  // the timer
  useEffect(() => {
    timerId.current = setInterval(() => {
      if (startCountdown <= 0) {
        time.current++;
        maybeFart();
      }
    }, 1000);
    return () => {
      time.current = 0;
      clearTimeout(timerId.current);
    };
  }, [timerId, startCountdown]);

  // start the countdown timer to when the seekers start
  useEffect(() => {
    const timers = Array(10)
      .fill(0)
      .map((_, i) =>
        setTimeout(() => setStartCountdown(10 - (i + 1)), i * 1000)
      );
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <View style={styles.base} onTouchStart={foundMe}>
      {countingDown && (
        <>
          <Text style={styles.bigText}>{startCountdown}</Text>
          <Text style={styles.bodyText}>Hide the phone!</Text>
        </>
      )}
      {!countingDown && !displayTime && (
        <Text style={styles.bigText}>Press me!</Text>
      )}
      {!countingDown && displayTime && (
        <>
          <View style={styles.rainbowContainer}>
            <RainbowBg style={styles.rainbow} />
            <View style={styles.pooContainer}>
              <Norman width={w * 0.7} height={w * 0.7} />
              <Text style={[styles.bodyText, { color: "black" }]}>
                Peekapoo
              </Text>
              <Text style={[styles.bigText, { color: "black" }]}>
                {displayTime}
              </Text>
            </View>
          </View>
          <Button text="Reset" onPress={first} />
        </>
      )}
    </View>
  );
};

export default Timer;
