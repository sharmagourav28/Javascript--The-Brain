// factorial number

function factNumber(num) {
  if (num == 0) {
    return -1;
  }

  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num = num - 1;
  }
  console.log(fact);
}

console.log(factNumber(2));
