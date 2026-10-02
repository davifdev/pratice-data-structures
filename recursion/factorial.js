// n! = n * (n - 1);
// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(num) {
  if (num < 0) return undefined;
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorialRecursive(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(5));
s;
