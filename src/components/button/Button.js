import React from "react";
import { View } from "react-native";
import { styles } from "./button.styles";
import { Text } from "../Text";

export const Button = ({ text }) => (
  <View style={styles.buttonContainer}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </View>
);
