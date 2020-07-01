import React, { useState } from "react";

import { Base } from "./components/base";
import { Poop } from "./components/poop";
import { Lower } from "./components/lower";
import { useLinearAnimation } from "./useLinearAnimation";

export default function App() {
  const [index, setIndex] = useState(0);
  const { linearAnimation, panResponder } = useLinearAnimation([
    index,
    setIndex,
  ]);
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower />
      <Poop />
    </Base>
  );
}
