import Letras from "./Letras";
import Chute from "./Chute";
export default function Jogo({ gameImage }) {
  const wordMasked = "_ua _e _ _e _a";
  return (
    <div className="game">
      <div className="game-top">
        <img className="game-image" src={gameImage} />
        <div className="right-side">
          <button className="choose-word">Escolher Palavra</button>
          <Palavra word={wordMasked} />
        </div>
      </div>
      <div className="game-bottom">
        <Letras />
        <Chute />
      </div>
    </div>
  );
}

function Palavra({ word }) {
  return <span className="masked-word">{word}</span>;
}
