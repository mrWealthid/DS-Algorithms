//Reverse a given number 1-10

///----first print 1-10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("========================================");
///reverse
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

///Reverse a string

let str = "abde";
let arr = [];

let length = str.length - 1;
for (let i = length; i >= 0; i--) {
  arr.push(str[i]);
}

console.log(arr);

// function reverseString(str) {
//   let arr = [];
//   let length = str.length - 1;
//   for (let i = length; i >= 0; i--) {
//     arr.push(str[i]);
//   }

//   return arr.join("");
// }

//solution 2

// function reverseString(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

////Solution 3
function reverseString(str) {
  return str.split("").reduce((acc, arr) => arr + acc, "");
}

console.log(reverseString(str));
