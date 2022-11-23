export default function Letras({
  disabled,
  clickLetter,
  lettersClicked,
  alphabet,
}) {
  return (
    <div className="keyboard">
      {alphabet.map((a) => (
        <button
          data-test="letter"
          className={`letter-option button-style ${
            disabled || lettersClicked.includes(a) ? "disabled" : ""
          }`}
          key={a}
          onClick={() => clickLetter(a)}
          disabled={disabled}
        >
          {a.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
