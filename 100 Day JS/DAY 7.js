// check palindrome

function checlPalin(str) {
  let newstr = str.split(" ").reverse().join("");
  console.log(newstr);
  if (str === newstr) {
    console.log("IsPalin");
  } else {
    console.log("Not Palin");
  }
}

const str = "abccba";
checlPalin(str);
