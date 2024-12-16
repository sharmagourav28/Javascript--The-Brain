// remove duplicate from an string

function removeDuplicateFromString(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (newstr.indexOf(str[i]) == -1) {
      newstr += str[i];
    }
  }
  console.log(newstr);
}
const str = "Hello World";
removeDuplicateFromString(str);
