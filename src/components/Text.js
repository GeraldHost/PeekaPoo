import React from "react";
import { Text as RnText, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
    fontFamily: "Staatliches-Regular",
  },
});

export const Text = (props) => <RnText {...props} style={[styles.text, props.style]} />;
