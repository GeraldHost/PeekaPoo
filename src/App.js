import React, { useState } from "react";

import PooSelect from "./PooSelect";
import Timer from "./Timer";
import Welcome from "./Welcome";

const App = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const screens = [Welcome, PooSelect, Timer];

  const next = () =>
    setScreenIndex((x) => (x + 1 >= screens.length ? screens.length : x + 1));

  const prev = () => setScreenIndex((x) => (x - 1 <= 0 ? 0 : x - 1));

  const first = () => setScreenIndex(0);

  return React.createElement(screens[screenIndex], { next, prev, first });
};

export default App;
