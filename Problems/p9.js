function checkFact(num) {
  let sum = 1;
  while (num > 0) {
    sum = num * sum;
    num--;
  }
  console.log(sum);
}

checkFact(4);
