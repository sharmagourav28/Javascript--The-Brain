// sum of square of array of elements

function squareArr(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i] * arr[i];
  }
  console.log(sum);
}

const arr = [1, 2, 3];
squareArr(arr);
