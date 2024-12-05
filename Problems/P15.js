function small(arr) {
  let n = arr.length;
  let smallele = arr[0];

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < smallele) {
      smallele = arr[i];
    }
  }
  return smallele;
}
const arr = [2, 4, 14, 12, 1, 2, 43, 11];
console.log(small(arr));
