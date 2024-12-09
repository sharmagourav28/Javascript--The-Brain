// How do you check if a string is a palindrome?

function checkpalin(str) {
  let nstr = str.split("").reverse().join("");
  console.log(nstr);

  if (nstr == str) {
    console.log("IsPlain");
  } else {
    console.log("Not Palin");
  }
}

const str = "123421";
console.log(checkpalin(str));
