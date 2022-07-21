const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  var letters = expr.split(/(.{10})/).filter((O) => O);
  var result = "";

  for (let letter of letters) {
    var morseLetter = "";
    if (letter.includes("*")) {
      result += " ";
      continue;
    }
    var symbols = letter.split(/(.{2})/).filter((O) => O);

    for (let symbol of symbols) {
      if (symbol === "00") {
        morseLetter += "";
      } else if (symbol === "10") {
        morseLetter += ".";
      } else {
        morseLetter += "-";
      }
    }
    result += MORSE_TABLE[morseLetter];
  }
  return result;
}

module.exports = {
  decode,
};
