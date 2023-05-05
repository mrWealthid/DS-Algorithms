// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  //convert num to string

  let numstr = num + "";

  const reversed = numstr.split("").reduce((acc, cur) => cur + acc, "");

  //If num is negative Math.sign returns -1, else 1

  //   console.log(reversed);
  //   console.log("ParseInt", parseInt(reversed));
  //   console.log("Number", Number(reversed));

  return parseInt(reversed) * Math.sign(num);
}

console.log(reverseInt(-15));
