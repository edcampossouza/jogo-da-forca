export default function Letras({
  disabled,
  clickLetter,
  lettersClicked,
  alphabet,
}) {
  return (
    <div className="keyboard">
      {alphabet.map((a) => (
        <div
          className={`letter-option button-style ${
            disabled || lettersClicked.includes(a) ? "disabled" : ""
          }`}
          key={a}
          onClick={() => clickLetter(a)}
        >
          {a.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
