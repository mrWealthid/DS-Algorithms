/////// Password Solution

const passwords = [
  "liketoCoDe",
  "teaMAKEsmehappy",
  "abracaDabra",
  "pasSword",
  "blackcoffeeiSthebest",
];
const common_words = ["coffee", "happy", "love"];

const isValid = (word, common_words) => {
  const commonWordRegex = new RegExp(common_words.join("|"), "g");

  return (
    word &&
    word.length >= 6 &&
    !/^[0-9]/.test(word) &&
    /[^A-Z]/.test(word) &&
    /[^a-z]/.test(word) &&
    !commonWordRegex.test(word)
  );
};

const getPasswordStrength2 = (passwords, common_words) => {
  return passwords.map((value) =>
    isValid(value, common_words) ? "strong" : "weak"
  );
};

///Using barycentric coords
function barycentricCoordinates(xp, yp, x1, y1, x2, y2, x3, y3) {
  const denominator = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
  const w1 = ((y2 - y3) * (xp - x3) + (x3 - x2) * (yp - y3)) / denominator;
  const w2 = ((y3 - y1) * (xp - x3) + (x1 - x3) * (yp - y3)) / denominator;
  const w3 = 1 - w1 - w2;
  return [w1, w2, w3];
}

function isPointInTriangle(xp, yp, x1, y1, x2, y2, x3, y3) {
  const [w1, w2, w3] = barycentricCoordinates(xp, yp, x1, y1, x2, y2, x3, y3);
  return w1 >= 0 && w2 >= 0 && w3 >= 0;
}

function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  // WRITE YOUR BRILLIANT CODE HERE
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

  if (!(condition1 && condition2 && condition3)) {
    return 0;
  }

  const isInsideP = isPointInTriangle(xp, yp, x1, y1, x2, y2, x3, y3);
  const isInsideQ = isPointInTriangle(xq, yq, x1, y1, x2, y2, x3, y3);

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
}
