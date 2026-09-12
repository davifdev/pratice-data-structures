const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

const averageTemp = [
  35.4, 37.8, 29.4, 41.2, 39.9, 36.4, 33.3, 45.4, 33.5, 32.5, 31.4, 43.2,
];

function getAverageTemp(months, averageTemp) {
  for (let i = 0; i < averageTemp.length; i++) {
    console.log(
      `A temperatuda média de ${months[i]} é igual a: ${averageTemp[i]}`,
    );
  }
}

getAverageTemp(months, averageTemp);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let day of daysOfWeek) {
  console.log(day);
}

function getFibonacciSequencie(num) {
  const fibonacciSequencie = [];
  const fibonacci = [];
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let i = 3; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  for (let i = 1; i < fibonacci.length; i++) {
    fibonacciSequencie.push(fibonacci[i]);
  }

  return fibonacciSequencie;
}

const result = getFibonacciSequencie(20);
console.log(result);
