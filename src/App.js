import React from "react";

import { Base } from "./components/base";
import { Poop } from "./components/poop";
import { Lower } from "./components/lower";
import { usePanAnimation } from "./usePanAnimation";

export default function App() {
  const { linearAnimation, panResponder, index } = usePanAnimation();
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower />
      <Poop linearAnimation={linearAnimation} index={index} />
    </Base>
  );
}
