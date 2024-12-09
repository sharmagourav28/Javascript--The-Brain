let arr = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];

const arr1 = arr.flat(Infinity);
console.log(Math.max(...arr1));
