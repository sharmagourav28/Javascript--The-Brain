// Find the maximum count of consecutive 1’s in an array.
function maxConsecutiveOnes(arr) {
  let maxcount = 0;
  let count = 0;
  for (let num of arr) {
    if (num == 1) {
      count++;
      maxcount = Math.max(maxcount, count);
      console.log({ maxcount, count });
    } else {
      count = 0;
    }
  }
  return maxcount;
}

// Example usage:
const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log("Maximum consecutive 1's:", maxConsecutiveOnes(arr));
