// Write a function to find the longest word in a sentence.

function longestsen(sen) {
  let newsen = sen.split(" ");
  //   console.log(newsen);
  let larsen = newsen.reduce(function (acc, items) {
    return acc.length > items.length ? acc : items;
  }, 0);
  return larsen;
}

const sen = "my name is shyam";
const newsen = longestsen(sen);
console.log(newsen);
