// check uppercase aur lowercase
function checkLetterUppercaseAurLowercase(str) {
  if (str === str.toUpperCase()) {
    console.log("Yes it is uppercase");
  } else if (str === str.toLowerCase()) {
    console.log("Yes it is lower case");
  }
}

const str = "g";
checkLetterUppercaseAurLowercase(str);
