function checkPalinDrome(str) {
  const newstr = str.split("").reverse().join("");
  //   console.log(newstr);
  if (str === newstr) {
    console.log("String is palindrome");
  } else {
    console.log("Not palindrome");
  }
}

checkPalinDrome("121");
