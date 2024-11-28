let num1 = [0, 3, 1];
let num2 = [4, 6, 31];

const num = num1.concat(num2);
num.sort((a, b) => b - a); // Ascending order
console.log(num);
