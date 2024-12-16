// min element in array

function minelemnet(arr) {
  let minElement = arr[0]; // Assume the first element is the smallest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i]; // Update the minimum value
    }
  }

  console.log("The minimum element is:", minElement);
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
minelemnet(arr);
console.log("min element in array", Math.min(...arr));
arr.sort((a, b) => b - a);
console.log(arr);
console.log(arr[arr.length - 1]);
