function checkPalin(string) {
  const arrayValue = string.split("");
  console.log(arrayValue);
  arrayValue.reverse();
  const newstr = arrayValue.join("");
  console.log(newstr);
  if (string === newstr) {
    console.log("Plain drome");
  }
}

const string = checkPalin("121");
