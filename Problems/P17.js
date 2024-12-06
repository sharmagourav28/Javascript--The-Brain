// How do you check if a string is a palindrome?
const str = "121";
const newstr = str.split("").reverse().join("");
console.log(newstr);
console.log(typeof newstr);
if (str === newstr) {
  console.log("Is Palin");
}
