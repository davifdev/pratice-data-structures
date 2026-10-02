// f(n) = f(n - 1) + f(n - 2);
function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  let fibonacci = [];

  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    fibonacci.push(fibN);
  }
  return fibonacci;
}

console.log(fibonacciIterative(15), "Fibonacci Iterative");

function fibonacciRecursive(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(15), "Fibonacci Recursive");
