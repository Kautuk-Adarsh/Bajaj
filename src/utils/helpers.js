function extractEvenNumbers(data) {
  return data.filter(x => /^\d+$/.test(x) && parseInt(x) % 2 === 0);
}

function extractOddNumbers(data) {
  return data.filter(x => /^\d+$/.test(x) && parseInt(x) % 2 !== 0);
}

function extractAlphabets(data) {
  return data.filter(x => /^[a-zA-Z]+$/.test(x)).map(x => x.toUpperCase());
}

function extractSpecialCharacters(data) {
  return data.filter(x => !/^[a-zA-Z0-9]+$/.test(x));
}

function calculateSum(data) {
  return String(data.filter(x => /^\d+$/.test(x)).reduce((a, b) => a + parseInt(b), 0));
}

function generateConcatString(data) {
  let alphabets = data.filter(x => /^[a-zA-Z]+$/.test(x)).join("");
  let reversed = alphabets.split("").reverse().join("");
  return reversed.split("").map((ch, i) =>
    i % 2 === 1 ? ch.toLowerCase() : ch.toUpperCase()
  ).join("");
}

module.exports = {
  extractEvenNumbers,
  extractOddNumbers,
  extractAlphabets,
  extractSpecialCharacters,
  calculateSum,
  generateConcatString
};
