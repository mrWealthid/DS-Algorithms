"use strict";

// function checkTwoArrays(a, b) {
//   let first = 0;
//   let second = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       first = first + 1 || 1;
//     } else if (a[i] < b[i]) {
//       second = second + 1 || 1;
//     }
//   }

//   return [first, second];
// }

// console.log(checkTwoArrays([20, 20, 30], [20, 20, 50]));

// 1 2 3   1 2 3 4
// 4 5 6   5 6 7 8
// 9 8 9   9 10 11 12

//0,4,8
//2,4,6

// function checkMatrix(a) {

// let leftToRight = 0,
//   rightToLeft = 0;
// for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//   leftToRight += arr[i][i];
//   rightToLeft += arr[i][j];
// }
// return Math.abs(leftToRight - rightToLeft);
// }

// // console.log(checkMatrix([1, 2, 3, 4, 5, 6, 9, 8, 9]));

// console.log(checkMatrix([11, 2, 4, 4, 5, 6, 10, 8, -12]));

// function miniMaxSum(arr) {
//   // Write your code here

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let copy = arr.slice();
//     copy.splice(i, 1);
//     newArr.push(copy.reduce((acc, curr) => acc + curr, 0));
//   }

//   let min = Math.max(...newArr);
//   let max = Math.min(...newArr);

//   return max + " " + min;
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]));

// function birthdayCakeCandles(candles) {
//   let charMap = {};

//   let maxChar = "";
//   let max = 0;

//   for (let num of candles) {
//     charMap[num] = charMap[num] + 1 || 1;
//   }

//   for (let key in charMap) {
//     if (charMap[key] > max) {
//
//       maxChar = key;
//     }
//   }
//   return max;
// }

// console.log(birthdayCakeCandles([1, 4, 4, 3]));

// function plusMinus(arr) {
//   const map = arr.reduce(
//     (state, action) => {
//       if (action === 0) {
//         state.zero = state.zero + 1 || 1;
//       } else if (action > 0) {
//         state.positive = state.positive + 1 || 1;
//       } else if (action < 0) {
//         state.negative = state.negative + 1 || 1;
//       }

//       return state;
//     },
//     { positive: 0, negative: 0, zero: 0 }
//   );

//   console.log(map.positive);
//   console.log(map.negative);
//   console.log(map.zero);

//   console.log((map.positive / arr.length).toFixed(6));
//   console.log((map.negative / arr.length).toFixed(6));
//   console.log((map.zero / arr.length).toFixed(6));
// }

// plusMinus([1, 1, 0, -1, -1]);

function camelcase(s) {
  // Write your code here

  let testCaps = /[A-Z]/g;

  let arr = s.split(testCaps);

  return arr.length;
}

console.log(camelcase("saveChangesInTheEditor"));

// let testCaps =
//   /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

// let spec = /[^\w]/g;

function stairCase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - 1) + "#".repeat(i));
  }
}

stairCase(6);

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  let count = 0;
  let caps = /[A-Z]/.test(password);
  let lowercase = /[a-z]/.test(password);
  let number = /[0-9]/.test(password);
  let hasSpecialChar = /[^\w]/g.test(password);
  let correctPassword =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/.test(
      password
    );

  //   if (password.length < n) {
  //     count = n - password.length;
  //   }

  if (!correctPassword && !caps) {
    count += 1;
  }

  if (!correctPassword && !lowercase) {
    count += 1;
  }

  if (!correctPassword && !number) {
    count += 1;
  }

  if (!correctPassword && !hasSpecialChar) {
    count += 1;
  }
  if (!correctPassword && password.length < 6) {
    count = 6 - password.length;
  }

  return count;
}

console.log(minimumNumber(6, "Ab1"));

function findMedian(arr) {
  const ages = arr.sort((a, b) => (a > b ? 1 : -1));
  let count = ages.length;
  let mid = count / 2;

  let counts = count % 2;

  const median =
    counts == 0 ? (ages[mid - 1] + ages[mid]) / 2 : ages[mid - 0.5];

  return median;
}

// console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
// console.log(findMedian([5, 3, 1, 2, 4]));

// function bigSorting(unsorted) {
//   return unsorted.sort((a, b) => (a > b ? 1 : -1));
// }

//Given an array of distinct integers, determine the minimum absolute difference between any two elements, print all element pairs with that difference in ascending order

// function findMinumum(arr) {
//   arr.sort((a, b) => a - b);

//   let minDiff = Infinity;
//   let pairs = [];

//   for (let i = 0; i < arr.length; i++) {
//     let diff = arr[i + 1] - arr[i];

//     if (diff < minDiff) {
//       pairs.push(arr[i], arr[i + 1]);
//     } else if (diff === minDiff) {
//       pairs.push([arr[i], arr[i + 1]]);
//     }
//   }
// }

//Do they belong

// xp, yp, xq, yq;

console.log("==============================================================");
function doTheyBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  let ab = x2 - x1;
  let bc = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
  let ac = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);

  let pOnLine = isInside(x1, y1, x2, y2, x3, y3, xp, yp);
  let QonLine = isInside(x1, y1, x2, y2, x3, y3, xq, yq);

  const acondition1 = ab + bc > ac;
  const acondition2 = bc + ac > ab;
  const acondition3 = ab + ac > bc;

  console.log(acondition1, acondition2, acondition3);

  console.log("P onLine===>", pOnLine);
  console.log("Q onLine===>", QonLine);

  if (!(ab + bc > ac && bc + ac > ab && ac + ab > bc)) {
    return " 0";
  } else if (pOnLine && QonLine) {
    return "3";
  } else if (!pOnLine && !QonLine) {
    return "4";
  } else if (pOnLine) {
    return "1";
  } else if (QonLine) {
    return "2";
  }
}

function area(x1, y1, x2, y2, x3, y3) {
  return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
}

function isInside(x1, y1, x2, y2, x3, y3, x, y) {
  /* Calculate area of triangle ABC */

  let A = area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */

  let A1 = area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */

  let A2 = area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  let A3 = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */

  return A === A1 + A2 + A3;
}

//======================================================================

//How do we know what point is within or on the triangle?

console.log(doTheyBelong(2, 2, 7, 2, 5, 4, 4, 3, 7, 4));
console.log(doTheyBelong(0, 0, 2, 0, 4, 0, 2, 0, 4, 0));
console.log(doTheyBelong(3, 1, 7, 1, 5, 5, 3, 1, 0, 0));

console.log(doTheyBelong(3, 1, 7, 1, 5, 5, 5, 2, 6, 3));
console.log(doTheyBelong(3, 1, 7, 1, 5, 5, 1, 1, 2, 2));

console.log("========================================================");

const areas = (x1, y1, x2, y2, x3, y3) => {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
};

const isInside2 = (x1, y1, x2, y2, x3, y3, x, y) => {
  const A = areas(x1, y1, x2, y2, x3, y3);

  const A1 = areas(x, y, x2, y2, x3, y3);

  const A2 = areas(x1, y1, x, y, x3, y3);

  const A3 = areas(x1, y1, x2, y2, x, y);

  return A == A1 + A2 + A3;
};

const doTheyBelong2 = (x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) => {
  const ab = Math.abs(x2 - x1);
  const bc = +Math.sqrt(
    Math.abs(x3 - x2) ** 2 + Math.abs(y3 - y2) ** 2
  ).toFixed(1);
  const ac = +Math.sqrt(
    Math.abs(x3 - x1) ** 2 + Math.abs(y3 - y1) ** 2
  ).toFixed(1);

  const condition1 = ab + bc > ac;
  const condition2 = bc + ac > ab;
  const condition3 = ab + ac > bc;

  console.log(condition1, condition2, condition3);

  if (!(condition1 && condition2 && condition3)) {
    return 0;
  }

  const isInsideP = isInside2(x1, y1, x2, y2, x3, y3, xp, yp);
  const isInsideQ = isInside2(x1, y1, x2, y2, x3, y3, xq, yq);

  console.log("P onLine===>", isInsideP);
  console.log("Q onLine===>", isInsideQ);

  if (isInsideP && !isInsideQ) {
    return 1;
  }

  if (!isInsideP && isInsideQ) {
    return 2;
  }

  if (isInsideP && isInsideQ) {
    return 3;
  }

  if (!isInsideP && !isInsideQ) {
    return 4;
  }
};

// console.log(doTheyBelong(0, 0, 2, 0, 4, 0, 2, 0, 4, 0));
// console.log(doTheyBelong(3, 1, 7, 1, 5, 5, 1, 1, 2, 2));
// console.log(doTheyBelong(3, 1, 7, 1, 5, 5, 5, 2, 6, 3));

console.log(doTheyBelong2(2, 2, 7, 2, 5, 4, 4, 3, 7, 4));
console.log(doTheyBelong2(0, 0, 2, 0, 4, 0, 2, 0, 4, 0));
console.log(doTheyBelong2(3, 1, 7, 1, 5, 5, 3, 1, 0, 0));

console.log("gggggggggggggggggggg");
console.log(doTheyBelong2(3, 1, 7, 1, 5, 5, 5, 2, 6, 3));
console.log(doTheyBelong2(3, 1, 7, 1, 5, 5, 1, 1, 2, 2));
