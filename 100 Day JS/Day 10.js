// calculate avg of an array

function calAvg(arr) {
  let n = arr.length;
  let sum = arr.reduce(function (acc, item) {
    return (acc = acc + item);
  });
  console.log(sum / n);
}
const arr = [1, 2, 3, 4, 5];
console.log(calAvg(arr));
