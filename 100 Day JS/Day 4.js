// prime Number is

function checkPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
console.log(checkPrime(3));
