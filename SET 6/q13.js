// Check if a number is prime

function prime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(3));
