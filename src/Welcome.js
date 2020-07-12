import React from "react";
import { View, StyleSheet } from "react-native";

import Trees from "./components/base/trees.svg";
import CircleBg from "./components/lower/circle.svg";
import WelcomeHeader from "./welcome-header.svg";

import { baseStyles, lowerStyles, Button, Text } from "./components";

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  splashContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  splash: {
    margin: 30,
    marginBottom: 60,
    marginTop: 160,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 0,
    padding: 30,
  },
  welcomeHeader: {
    marginTop: -80,
  },
  splashHeader: {
    fontSize: 50,
  },
  splashBody: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 25,
  }
});

const Welcome = () => {
  return (
    <View style={baseStyles.base}>
      <Trees
        height="100%"
        style={[
          baseStyles.trees,
          {
            marginTop: -30,
          },
        ]}
      />
      <View style={lowerStyles.base}>
        <View style={lowerStyles.lower} />
        <View style={lowerStyles.circle}>
          <CircleBg height="100%" width="100%" />
        </View>
      </View>
      <View style={styles.splashContainer}>
        <View style={styles.splash}>
          <WelcomeHeader style={styles.welcomeHeader} />
          <Text style={styles.splashBody}>Welcome to</Text>
          <Text style={styles.splashHeader}>Peekapoo</Text>
          <Text style={styles.splashBody}>1. Select a poo</Text>
          <Text style={styles.splashBody}>
            2. Hide the phone from the seekers
          </Text>
          <Text style={styles.splashBody}>
            3. Seekers race against the clock to find the poop
          </Text>
        </View>
      </View>
      <Button text="Ready" />
    </View>
  );
};

export default Welcome;
