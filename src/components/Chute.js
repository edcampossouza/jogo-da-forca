export default function Chute({ disabled }) {
  return (
    <div className="guess">
      <span className="input-label">Já sei a palavra!</span>
      <input disabled={disabled} className="guess-input"></input>
      <div
        className={`guess-button button-style ${disabled ? "disabled" : ""}`}
      >
        Chutar
      </div>
    </div>
  );
}
