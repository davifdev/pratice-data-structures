const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}
