function checkprime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 == 0) {
      return false;
    }
  }

  return true;
}

console.log(checkprime(8));
