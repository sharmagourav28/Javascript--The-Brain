// max from an array

function findMax(arr) {
  let maxele = -Infinity;
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxele) {
      maxele = arr[i];
    }
  }
  return maxele;
}

const arr = [-5, -3, -1, -2, -10];
console.log(findMax(arr));
