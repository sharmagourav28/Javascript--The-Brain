function sortarr(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function maxelement(arr) {
  let maxele = -Infinity;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > maxele) {
      // console.log(maxele)
      maxele = arr[i];
    }
  }
  return maxele;
}
function secondlar(arr) {
  let second = -Infinity;
  let n = arr.length;
  let first = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
}
function oddlar(arr) {
  let n = arr.length;
  let odd = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] % 2 != 0) {
      if (arr[i] > odd) {
        odd = arr[i];
      }
    }
  }
  return odd;
}
function secondodd(arr) {
  let n = arr.length;
  let f = -Infinity;
  let s = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] % 2 != 0) {
      if (arr[i] > f) {
        s = f;
        f = arr[i];
      } else if (arr[i] > s && arr[i] != f) {
        s = arr[i];
      }
    }
  }
  return s;
}
function removeDuplicate(arr) {
  let n = arr.length;
  let newarr = [];
  for (let i = 0; i < n - 1; i++) {
    if (newarr.indexOf(arr[i]) == -1) {
      console.log(arr[i]);
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

const arr = [2, 4, 14, 2, 12, 4, 43, 11, 1];
console.log(maxelement(arr));
console.log(secondlar(arr));
console.log(oddlar(arr));
console.log(secondodd(arr));
console.log(removeDuplicate(arr));
console.log(sortarr(arr));
