// count vowels in string

function countVowelInString(str) {
  let vowelCount = 0;
  let newstr = str.split("");
  for (let i = 0; i < newstr.length; i++) {
    if (
      newstr[i].toLowerCase() == "a" ||
      newstr[i].toLowerCase() == "i" ||
      newstr[i].toLowerCase() == "o" ||
      newstr[i].toLowerCase() == "e" ||
      newstr[i].toLowerCase() == "u"
    ) {
      vowelCount = vowelCount + 1;
    }
  }
  console.log(vowelCount);
}
const str = "hEllo wOrld";
console.log(countVowelInString(str));
