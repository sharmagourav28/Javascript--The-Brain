const arr = [32, 20, 3, 54, 12, 4, 32, 2, 34];

const newarr = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(newarr);
