import { useState } from "react";
import img0 from "../assets/forca0.png";
import img1 from "../assets/forca1.png";
import img2 from "../assets/forca2.png";
import img3 from "../assets/forca3.png";
import img4 from "../assets/forca4.png";
import img5 from "../assets/forca5.png";
import img6 from "../assets/forca6.png";

import Jogo from "./Jogo";
export default function App() {
  const [numErrors, setNumErrors] = useState(0);
  const [playing, setPlaying] = useState(false);
  const images = [img0, img1, img2, img3, img4, img5, img6];
  function startGame() {
    setPlaying(true);
  }
  return (
    <>
      <Jogo
        gameImage={images[numErrors]}
        playing={playing}
        startGame={startGame}
      />
    </>
  );
}
