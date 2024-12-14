function isArmstrongNumber(num) {
  const numStr = num.toString();
  const numLength = numStr.length;
  let sum = 0;

  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numLength);
  }

  return sum === num;
}

// Example usage:
const number = 153;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
