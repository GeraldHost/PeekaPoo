import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "./components";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  bodyText: {
    color: "white",
    fontSize: 40,
  },
  timeText: {
    color: "white",
    fontSize: 80,
  },
});

const formatNumber = (n) => `${n.length >= 2 ? "" : "0"}${n}`;

const Timer = () => {
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

  useEffect(() => {
    if (startCountdown <= 0) {
      timerId.current = setInterval(() => time.current++, 1000);
    }
    return () => clearTimeout(timerId.current);
  }, [startCountdown]);

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
          <Text style={styles.timeText}>{startCountdown}</Text>
          <Text style={styles.bodyText}>Hide the phone!</Text>
        </>
      )}
      {!countingDown && displayTime && (
        <Text style={styles.timeText}>{displayTime}</Text>
      )}
    </View>
  );
};

export default Timer;
