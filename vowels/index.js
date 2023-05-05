let vowel = ["a", "e", "i", "o", "u"];

// function findVowel(string) {
//   let count = 0;

//   for (let str of string) {
//     vowel.includes(str.toLowerCase()) ? count++ : count;
//   }
//   return count;
// }

//////////Using Regex

function findVowel(str) {
  let word = "aeiou";
  const regex = new RegExp(`.*${word}.*`);
  const matches = str.match(/[aeiou]/gi);

  //   const matches = str.match(regex);
  return matches ? matches.length : 0;

  str.ma;
}

console.log(findVowel("I love my food"));
