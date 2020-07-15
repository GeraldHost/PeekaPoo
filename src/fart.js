import Sound from "react-native-sound";

Sound.setCategory("Playback");

export const fart = () => {
  const fartIndex = Math.round(Math.random() * 23);
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

