// Write a program to remove duplicates from an array.
function removedup(arr) {
  let n = arr.length;
  let newarr = [];
  for (let i = 0; i < n - 1; i++) {
    if (newarr.indexOf(arr[i]) == -1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
const arr = [0, 34, 1, 2, 3, 51, 2, 34, 2, 14, 45];
console.log(removedup(arr));
