import { useState } from "react";
import alfabeto from "../letras";
import palavras from "../palavras";
import Jogo from "./Jogo";


const img0 = "./forca0.png";
const img1 = "./forca1.png";
const img2 = "./forca2.png";
const img3 = "./forca3.png";
const img4 = "./forca4.png";
const img5 = "./forca5.png";
const img6 = "./forca6.png";

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
    setNumErrors(6);
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
        answer={word}
      />
    </>
  );
}
