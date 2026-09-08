const months = [
  "January",
  "Fenruary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const averageTemp2021 = [
  31.9, 35.3, 42.4, 52, 60.8, 33.4, 75.2, 76.8, 70.7, 59.1, 47.3, 36.9,
];

const averageTemp2022 = [
  32.1, 36.2, 43.1, 53.2, 61.5, 34.1, 76.3, 77.9, 71.8, 59.8, 48.0, 37.6,
];

function getAverageTemperature(averageTemp, year) {
  console.log(`Average temperature for ${year}:`);
  for (let i = 0; i < averageTemp.length; i++) {
    console.log(`${months[i]} mean temperature: ${averageTemp[i]}`);
  }
}

getAverageTemperature(averageTemp2021, 2021);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(`Day ${i + 1}: ${daysOfWeek[i]}`);
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i <= 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(`Fibonacci: `, fibonacci[i]);
}
