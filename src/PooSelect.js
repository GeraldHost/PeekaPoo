import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Base } from "./components/base";
import { Button } from "./components/button";
import { Poop } from "./components/poop";
import { Lower } from "./components/lower";
import { usePanAnimation } from "./usePanAnimation";

export default function PoopSelect() {
  const { linearAnimation, panResponder, index } = usePanAnimation();
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower linearAnimation={linearAnimation} />
      <Poop linearAnimation={linearAnimation} index={index} />
      <Button>Select</Button>
    </Base>
  );
}
