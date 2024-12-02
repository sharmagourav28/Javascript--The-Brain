let arr = [1, 2, 1, 2, 1, 21, 2];
// const newarr = [...new Set(arr)];
// console.log(newarr);
// console.log(typeof newarr);

let newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (newarr.indexOf(arr[i]) == -1) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);
