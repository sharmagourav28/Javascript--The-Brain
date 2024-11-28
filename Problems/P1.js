let sentence = "JavaScript is awesome";
let longestWord = sentence.split(" ").reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
}, "");
console.log(longestWord);

// longest word in sentence
