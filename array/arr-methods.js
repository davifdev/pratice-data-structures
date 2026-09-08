const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5, 6];
const negativeNumbers = [-1, -2, -3, -4, -5, -6];

let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

function isEven(x) {
  return x % 2 === 0;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayResult = [];
for (let i = 0; i < nums.length; i++) {
  arrayResult.push(isEven(nums[i]));
}
console.log(arrayResult);

const isEvenES6 = (x) => x % 2 === 0;

console.log(nums.every(isEven));
console.log(nums.some(isEven));

nums.forEach((num) => console.log("forEach: ", num % 2 === 0));
console.log(nums.map(isEvenES6));

const evensNumbers = nums.filter(isEven);
console.log(evensNumbers);

const total = nums.reduce((prev, current) => prev + current, 0);
console.log(total);
