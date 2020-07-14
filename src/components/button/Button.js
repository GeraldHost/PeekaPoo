import React from "react";
import { View } from "react-native";
import TouchableScale from "react-native-touchable-scale";

import { Text } from "../Text";
import { styles } from "./button.styles";

export const Button = ({ text, onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableScale onPress={onPress} activeScale={1.05}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableScale>
  </View>
);
