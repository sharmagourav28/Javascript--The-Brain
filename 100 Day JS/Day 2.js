// i/p is my name is gourav
// o/p is MyNameIsGourav

function changeString(str) {
  let words = str.split(" ");
  //   console.log(words);
  //   console.log(words);
  let res = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  console.log(res);
  //   console.log(typeof res);
}
const str = "my name is gourav";
changeString(str);

// let n = "Gourav";
// console.log(n.slice(1));
