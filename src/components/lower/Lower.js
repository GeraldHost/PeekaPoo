import React from "react";
import { View } from "react-native";

import NormanBg from "./norman-bg.svg";
import { styles } from "./lower.styles";

export const Lower = () => {
  return (
    <View style={styles.base}>
      <View style={styles.lower} />
      <View style={styles.bg}>
        <NormanBg height="100%" style={styles.bg} />
      </View>
    </View>
  );
};
