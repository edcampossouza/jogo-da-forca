import Letras from "./Letras";
import Chute from "./Chute";
export default function Jogo({ gameImage, playing, startGame }) {
  const wordMasked = "_ua _e _ _e _a";
  return (
    <div className="game">
      <div className="game-top">
        <img className="game-image" src={gameImage} />
        <div className="right-side">
          <button className="choose-word" onClick={startGame}>
            Escolher Palavra
          </button>
          <Palavra word={wordMasked} />
        </div>
      </div>
      <div className="game-bottom">
        <Letras disabled={!playing} />
        <Chute disabled={!playing} />
      </div>
    </div>
  );
}

function Palavra({ word }) {
  return <span className="masked-word">{word}</span>;
}
