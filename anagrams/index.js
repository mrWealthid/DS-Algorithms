// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(word1, word2) {
//   let word1Arrr = word1
//     .toLowerCase()
//     .replace(/[^\w]/g, "")

//     .split("");
//   let word2Arr = word2.toLowerCase().replace(/[^\w]/g, "").split("");

//   //   console.log("Word1=====>", word1Arrr);
//   //   console.log("Word2=====>", word2Arr);

//   if (word1Arrr.length !== word2Arr.length) {
//     return false;
//   } else {
//     const check = word1Arrr.every((w) => word2Arr.includes(w));
//     return check;
//   }
// }

//2nd solution
function anagrams(word1, word2) {
  let str1 = clearStr(word1);
  let str2 = clearStr(word2);

  return str1 === str2;
}

function clearStr(str) {
  return str.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
}

console.log("Response1 ===>", anagrams("hi there", "Bye there"));
console.log("Response2 ===>", anagrams("Rail safety", "fairy tales"));
console.log("Response3 ===>", anagrams("RAIL! SAFETY!", "fairy tales"));
console.log("Response3 ===>", anagrams("One one", "One one c"));
