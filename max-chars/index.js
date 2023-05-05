// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const wordCount = str.split("").reduce((state, action) => {
//     state[action] = state[action] + 1 || 1;
//     return state;
//   }, {});
//   return wordCount;
// }

function maxChar(str) {
  let characterMap = {};
  let charMax = "";
  let max = "";
  for (let char of str) {
    characterMap[char] = characterMap[char] + 1 || 1;
  }

  for (let key in characterMap) {
    if (characterMap[key] > max) {
      max = characterMap[key];
      charMax = key;
    }
  }
  return charMax;
}

console.log(maxChar("abcccccccd"));
