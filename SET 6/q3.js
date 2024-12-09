// Write a program to remove duplicates from an array.

function removedup(arr) {
  const dup = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (dup.indexOf(arr[i]) == -1) {
      dup.push(arr[i]);
    }
  }
  return dup;
}

const arr = [0, 0, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];
const newarr = removedup(arr);
console.log(newarr);
