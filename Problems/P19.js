function printarr(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newarr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

function opt(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    } else if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return odd.concat(even);
}

const arr = [1, 2, 3, 4, 5];
const prarr = printarr(arr);
console.log(prarr);
const op1 = opt(arr);
console.log(typeof op1);
console.log(op1);
