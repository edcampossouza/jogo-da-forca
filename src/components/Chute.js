export default function Chute({ disabled, guessWord, setGuessWord, tryGuess }) {
  return (
    <div className="guess">
      <span className="input-label">Já sei a palavra!</span>
      <input
        disabled={disabled}
        className="guess-input"
        value={guessWord}
        onChange={(e) => setGuessWord(e.target.value)}
      ></input>
      <div
        onClick={tryGuess}
        className={`guess-button button-style ${disabled ? "disabled" : ""}`}
      >
        Chutar
      </div>
    </div>
  );
}
