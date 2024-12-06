//   Write a function to find the longest word in a sentence.
const sen = "hello my name is gouravsharma";
const newsen = sen.split(" ");
const larsen = newsen.reduce(function (acu, curr) {
  return curr.length > acu.length ? curr : acu;
});
console.log(newsen);
console.log(larsen);
