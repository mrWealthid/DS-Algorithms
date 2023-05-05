// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(num) {
  for (let row = 0; row < num; row++) {
    let stair = "";

    for (let col = 0; col < num; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

///////Learning recursion

function printName(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  printName(n - 1);
}

printName(10);

console.log(steps(5));
