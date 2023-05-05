function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

pyramid(6);

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

steps(6);
