import React from "react";
import { View, Text } from "react-native";
import { styles } from "./button.styles";

export const Button = ({ children }) => (
  <View style={styles.buttonContainer}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </View>
);
