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
          disabled={disabled || lettersClicked.includes(a)}
        >
          {a.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
