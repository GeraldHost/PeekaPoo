import React from "react";


import { Base, Poop, Lower, Button } from "./components";
import { usePanAnimation } from "./usePanAnimation";

export default function PoopSelect({ next }) {
  const { linearAnimation, panResponder, index } = usePanAnimation();
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower linearAnimation={linearAnimation} />
      <Poop linearAnimation={linearAnimation} index={index} />
      <Button text="Select" onPress={next} />
    </Base>
  );
}
