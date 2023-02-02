import React, { useState } from "react";
import Slide from "./components/Slide";

function App() {
  const [slideValue, setSlidevalue] = useState(0);

  //input value
  const handleInput = (e) => {
    setSlidevalue(e.target.value);
  };

  //changel colors text background
  let bgColor;
  let textColor;
  //conditions
  if (slideValue < 25) {
    bgColor = "green";
    textColor = "red";
  }
  if (slideValue < 25 && slideValue <= 50) {
    bgColor = "yellow";
    textColor = "green";
  }
  if (slideValue > 51 && slideValue <= 75) {
    bgColor = "pink";
  }
  if (slideValue <= 100) {
    bgColor = "brown";
    textColor = "yellow";
  }
  return (
    <div className="container">
      <h1>Slide To Grow APP</h1>
      <Slide
        slideValue={slideValue}
        handleInput={handleInput}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}

export default App;
