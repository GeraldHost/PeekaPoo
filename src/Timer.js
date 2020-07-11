import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 80,
  },
});

const formatNumber = (n) => `${n.length >= 2 ? "" : "0"}${n}`

const Timer = () => {
  // FIXME: don't actually need to track time in state.
  // instead we can inc this inside a local function as the
  // user doesn't need to see this timer counting as the phone
  // will be face down
  const [displayTime, setDisplayTime] = useState("");
  const timerId = useRef(null);
  const time = useRef(null);

  const formatTime = (t) => {
    const left = Math.floor(t / 60);
    const right = t % 60;
    return `${formatNumber(left)}:${formatNumber(right)}`;
  };
  
  const printTime = () => {
    clearTimeout(timerId.current);
    setDisplayTime(formatTime(time.current));
  }

  useEffect(() => {
    timerId.current = setInterval(() => time.current++, 1000);
    return () => clearTimeout(timerId.current);
  }, []);

  // FIXME: remove this just for testing
  useEffect(() => {
    const timer = setTimeout(() => printTime(), 5000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.base}>
      <Text style={styles.text}>{displayTime}</Text>
    </View>
  );
};

export default Timer;
