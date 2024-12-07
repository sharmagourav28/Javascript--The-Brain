//  Write a function to calculate the factorial of a given number.

function fact(n) {
  let f = 1;
  if (n == 0) {
    return -1;
  }
  if (n == 1) {
    return f;
  }

  while (n > 0) {
    f = f * n;
    n--;
  }
  return f;
}

let n = 5;
let fn = console.log(fact(n));
console.log(fn);
