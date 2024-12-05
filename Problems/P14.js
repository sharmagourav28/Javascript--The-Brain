function sumarr(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
function misselement(arr) {
  let n = arr.length;
  let digi = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum = sum + arr[i];
  }
  return digi - sum;
}
const arr = [1, 2, 3, 5, 6, 7];
console.log(sumarr(arr));
console.log(misselement(arr));
