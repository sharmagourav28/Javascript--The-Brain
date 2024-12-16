// mean of avg

function meanAvg(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / n;
  console.log(avg);
}

const arr = [1, 2, 3, 4, 5];
meanAvg(arr);
