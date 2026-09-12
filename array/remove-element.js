// Removendo um elemento ao final do array usando o método pop()
const cars = ["Porsche", "Ferrari", "McLaren", "Bugatti", "Jaguar"];
cars.pop();
console.log(cars);

// Removendo um elemento ao final do array sem utilizar o método pop()
const newArr = [];
delete cars[cars.length - 1];
for (let i = 0; i < cars.length; i++) {
  if (cars[i] !== undefined) {
    newArr.push(cars[i]);
  }
}
console.log(newArr);

// Removendo um elemento do ínicio do array utilizando o método shift()
const colors = ["Red", "Green", "Blue", "Brown", "Pink"];
colors.shift();
console.log(colors);

// Removendo um elemento do ínicio do array sem utilizar o método shift()
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

Array.prototype.reIndex = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const result = colors.removeFirstPosition();
console.log(result);
