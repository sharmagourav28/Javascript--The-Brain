// sum of digits

function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    // console.log(rem);
    sum = sum + rem;
    // console.log(sum);
    num = Math.floor(num / 10);
    // console.log(num);
  }
  console.log(sum);
}

const num = 12345;
sumOfDigit(num);
