function maxele(arr) {
  let n = arr.length;
  let maxelement = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > maxelement) {
      maxelement = arr[i];
    }
  }
  return maxelement;
}

const arr = [32, 20, 3, 54, 12, 4, 32, 2, 34];
console.log(maxele(arr));
