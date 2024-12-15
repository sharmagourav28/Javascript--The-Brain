// remove duplicates from an array

function removeDuplicate(arr) {
  let n = arr.length;
  let newarr = [];
  for (let i = 0; i < n; i++) {
    if (newarr.indexOf(arr[i]) == -1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9];
console.log(removeDuplicate(arr));
