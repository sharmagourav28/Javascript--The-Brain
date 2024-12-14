// Count the occurrences of each character in a string.
function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    char = char.toLowerCase(); // Optional: make the count case-insensitive
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage:
const inputString = "hello world";
const result = countCharacters(inputString);
console.log(result);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
