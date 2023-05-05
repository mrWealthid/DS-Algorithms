function checkPassword(n, password) {
  let missingCriteria = 0;

  if (!/[0-9]/g.test(password)) {
    missingCriteria++;
  }

  if (password.length > n) {
    missingCriteria++;
  }
  if (!/a-z/.test(password)) {
    missingCriteria++;
  }
  if (!/A-Z/.test(password)) {
    missingCriteria++;
  }
  if (!/[^\w]/g.test(password)) {
    missingCriteria++;
  }

  return missingCriteria;
}

console.log(checkPassword(6, "Ab1"));

function isValid(passwords, commonWords) {
  if (!commonWordsRegex) {
    commonWordsRegex = new RegExp(commonWords.join("|", "1"));

    console.log(commonWordsRegex);
  }
}

isValid(["test", "fresh"], ["sh", "best"]);
