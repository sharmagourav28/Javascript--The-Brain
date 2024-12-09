function fact(num) {
  if (num == 0) {
    return -1;
  }
  if (num == 1) {
    return 1;
  }
  if (num > 1) {
    let fact = 1;
    while (num > 0) {
      fact = fact * num;
      num--;
    }
    return fact;
  }
}

const num = fact(4);
console.log(num);
