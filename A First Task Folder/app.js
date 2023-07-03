function isPrime(number) {
  for (let i = 2; i < number; i++) {
    // 1
    console.log("Running");
    if (number % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
}

// Best Case: number = 1 Or number = 2 => 0(1)
// Average Case: 0(n)
// Worst Case: number = 27,277 => 0(n)

console.log(isPrime(27277));
//console.log(isPrime(2));
//console.log(isPrime(9));
