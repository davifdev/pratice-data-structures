const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 13, 10];

console.log(numbers.indexOf(10));
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(116));

function multipleOf13(element, index, array) {
  return element % 13 === 0;
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));
console.log(numbers.findLastIndex(multipleOf13));
