// Filter and return only even numbers from an array.

function even(arr) {
  let evenarr = arr.filter(function (item) {
    return item % 2 == 0;
  });
  return evenarr;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(even(arr));
