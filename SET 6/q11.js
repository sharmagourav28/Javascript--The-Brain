// Write a program to find the maximum number in an array.
function maxele(arr) {
  let m = -Infinity;

  for (let i in arr) {
    if (arr[i] > m) {
      m = arr[i];
    }
  }
  return m;
}

const arr = [34, 3, 45, 2, 30, 5];
console.log(maxele(arr));
