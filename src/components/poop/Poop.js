import React from "react";
import { View, Animated, Dimensions } from "react-native";

import Cece from "./cece.svg";
import Norman from "./norman.svg";
import { styles } from "./poop.styles";

const w = Dimensions.get("window").width;

// TODO: create a seperate component for the poop that controls the shaddow color etc
export const Poop = ({ linearAnimation, index }) => {
  return (
    <View style={styles.poopContainer}>
      <Animated.View
        style={{
          transform: [
            {
              scale: linearAnimation.interpolate({
                inputRange: [0, 50, 100, 150, 200],
                outputRange: [1, 0, 1, 0, 1],
              }),
            },
          ],
        }}
      >
        {index % 2 ? <Cece width={w * 0.7} /> : <Norman width={w * 0.7} />}
      </Animated.View>
    </View>
  );
};
