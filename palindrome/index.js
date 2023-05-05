// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindromeCheck(str) {
  const reversed = str.split("").reduce((acc, curr) => {
    return curr + acc;
  }, "");

  return reversed === str;
}

//solution 2

//0

// [a, b, b, a];

// a === abba[4 - 0 - 1]; //3
// b === abba[4 - 1 - 1]; //2
// b === abba[4 - 2 - 1]; //1
// a === abba[4 - 3 - 1]; // 0

function palindromeCheck(str) {
  return str.split("").every((word, i) => {
    return word === str[str.length - i - 1]; //explaining this line
  });
}
console.log(palindromeCheck("abbba"));
