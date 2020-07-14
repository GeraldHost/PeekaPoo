import React, { useEffect } from "react";
import Sound from "react-native-sound";

Sound.setCategory("Playback");

const fart = () => {
  const fartIndex = Math.round(Math.random() * 9);
  console.log("FI", fartIndex);
  const sound = new Sound(
    `farts/${fartIndex}.wav`,
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log("fart failed", error);
        return;
      }
      sound.play((success) => {
        if (success) console.log("farted");
      });
    }
  );
};

import { Base, Poop, Lower, Button } from "./components";
import { usePanAnimation } from "./usePanAnimation";

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
