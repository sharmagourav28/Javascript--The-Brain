let arr = [1, 2, 1, 2, 1, 3, 4, 51, 1];
let cntOne = 0;
for (const key in arr) {
  if (arr[key] == 1) {
    cntOne++;
  }
}
console.log(`1s In array is ${cntOne}`);
