import React, { useEffect } from "react";

import { fart } from "./fart";
import { usePanAnimation } from "./usePanAnimation";
import { Base, Poop, Lower, Button } from "./components";

export default function PoopSelect({ next }) {
  const { linearAnimation, panResponder, index } = usePanAnimation();

  useEffect(() => {
    const timer = setTimeout(() => fart(), 400);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <Base {...panResponder.panHandlers} linearAnimation={linearAnimation}>
      <Lower linearAnimation={linearAnimation} />
      <Poop linearAnimation={linearAnimation} index={index} />
      <Button text="Select" onPress={next} />
    </Base>
  );
}
