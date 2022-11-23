import Letras from "./Letras";
import Chute from "./Chute";
export default function Jogo({
  gameImage,
  playing,
  startGame,
  clickLetter,
  lettersClicked,
  alphabet,
  maskedWord,
  gameStatus,
  guessWord,
  setGuessWord,
  tryGuess,
  answer,
}) {
  return (
    <div className="game">
      <div className="game-top">
        <img className="game-image" src={gameImage} data-test="game-image" />
        <div className="right-side">
          <button
            className="choose-word"
            onClick={startGame}
            data-test="choose-word"
          >
            Escolher Palavra
          </button>
          <Palavra word={maskedWord} gameStatus={gameStatus} answer={answer} />
        </div>
      </div>
      <div className="game-bottom">
        <Letras
          disabled={!playing}
          clickLetter={clickLetter}
          lettersClicked={lettersClicked}
          alphabet={alphabet}
        />
        <Chute
          disabled={!playing}
          guessWord={guessWord}
          setGuessWord={setGuessWord}
          tryGuess={tryGuess}
        />
      </div>
    </div>
  );
}

function Palavra({ word, answer, gameStatus }) {
  const wordClass =
    gameStatus === "won"
      ? "word-won"
      : gameStatus === "lost"
      ? "word-lost"
      : "";
  return (
    <div
      data-test="word"
      data-answer={answer}
      className={`masked-word ${wordClass}`}
    >
      {word}
    </div>
  );
}
