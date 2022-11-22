export default function Letras({ clickLetter }) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div class="keyboard">
      {alfabeto.map((a) => (
        <div className="letter-option button-style">{a.toUpperCase()}</div>
      ))}
    </div>
  );
}
