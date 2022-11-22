import { useState } from "react";
import img0 from "../assets/forca0.png";
import img1 from "../assets/forca1.png";
import img2 from "../assets/forca2.png";
import img3 from "../assets/forca3.png";
import img4 from "../assets/forca4.png";
import img5 from "../assets/forca5.png";
import img6 from "../assets/forca6.png";
import alfabeto from "../letras";
import palavras from "../palavras";
import Jogo from "./Jogo";

const MAX_ERRORS = 6;

export default function App() {
  const [numErrors, setNumErrors] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [word, setWord] = useState("");
  const [maskedWord, setMaskedWord] = useState("");
  const [lettersClicked, setLettersClicked] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [guessWord, setGuessWord] = useState("");
  const images = [img0, img1, img2, img3, img4, img5, img6];

  function startGame() {
    const size = palavras.length;
    const newWord = palavras[Math.floor(Math.random() * size)];
    console.log(newWord);
    setWord(newWord);
    setMaskedWord(
      newWord
        .split("")
        .map((_) => "_")
        .join("")
    );
    setPlaying(true);
    setNumErrors(0);
    setGameStatus("");
    setGuessWord("");
    setLettersClicked([]);
  }

  function tryGuess() {
    if (!playing) return;
    if (guessWord.toLowerCase() === word.toLowerCase()) gameWon();
    else gameLost();
  }

  function gameWon() {
    setGameStatus("won");
    setPlaying(false);
    setMaskedWord(word);
  }

  function gameLost() {
    setGameStatus("lost");
    setPlaying(false);
    setMaskedWord(word);
  }

  function clickLetter(letter) {
    if (!playing) return;
    letter = letter.toLowerCase();
    if (!lettersClicked.includes(letter))
      setLettersClicked((prev) => [...prev, letter]);
    else return;
    if (!word.split("").includes(letter)) {
      if (numErrors + 1 >= MAX_ERRORS) {
        setNumErrors((n) => n + 1);
        gameLost();
        return;
      }
      setNumErrors((n) => n + 1);
    }
    const newMaskedWord = word
      .split("")
      .map((a) => ([...lettersClicked, letter].includes(a) ? a : "_"))
      .join("");
    setMaskedWord(newMaskedWord);
    if (!newMaskedWord.includes("_")) {
      gameWon();
    }
  }

  return (
    <>
      <Jogo
        gameImage={images[numErrors]}
        playing={playing}
        startGame={startGame}
        clickLetter={clickLetter}
        lettersClicked={lettersClicked}
        alphabet={alfabeto}
        maskedWord={maskedWord}
        gameStatus={gameStatus}
        guessWord={guessWord}
        setGuessWord={setGuessWord}
        tryGuess={tryGuess}
      />
    </>
  );
}
