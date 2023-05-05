let commonWordsRegex;

function isValid(password, commonWords) {

    let results =[]
  if (!commonWordsRegex) {
      commonWordsRegex = new RegExp(commonWords.join("|"), 'gi');
      



      if (commonWordsRegex.test(password)) results.push('weak')
      
      if (password.length < 6) results.push('weak')
      
      if (/^\d+$/g.test(password)) results.push('weak')


      if(/A-/)
        //   if(c.test(password))

        console.log(commonWordsRegex);
    }
    


}

isValid(["test", "fresh"], ["sh", "best", "how"]);




function checkPassword(n, password) {
  let missingCriteria = 0;

  if (!/[0-9]/g.test(password)) {
      missingCriteria++;
  }

    if (password.length <n) {
    missingCriteria++;
  }
  if (!/[a-z]/g.test(password)) {
    missingCriteria++;
  }
  if (!/[A-Z]/g.test(password)) {
    missingCriteria++;
  }
  if (!/[^\w]/g.test(password)) {
    missingCriteria++;
    }
    
    

  return missingCriteria;
}

console.log(checkPassword(6, "Ab1"));
console.log(checkPassword(6, "2bbbb"));
console.log(checkPassword(6, "2bb#A"));

console.log(!/[0-9]/g.test("Ab"));
console.log(/[a-z]/g.test("Ab1"));
console.log(/[A-Z]/g.test("Ab1"));
   console.log(!/[^\w]/g.test("Ab1"));

console.log(!/[a-z]/g.test("AArAZ"));
console.log(!/[A-Z]/g.test("gggg"));
console.log(/^[0-9]+$/g.test('23444ddd44'))
console.log(/^\d+$/g.test("23444ddd44"));

