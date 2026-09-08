// Adicionando um elemento ao final do array
const numbers = [1, 2, 3, 4, 5];
numbers[numbers.length] = 6;
console.log(numbers);

// Adicionando um elemento ao final do array usando push
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

// Adicionando um elemento ao início do array
const colors = ["red", "green", "blue"];
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};

colors.insertFirstPosition("yellow");
console.log(colors);

// Adicionando um elemento ao início do array usando unshift
colors.unshift("purple");
console.log(colors);

// Adicioando um elemento em uma posição específica do array
const animals = ["cat", "dog", "rabbit"];
Array.prototype.insertAtPosition = function (position, value) {
  for (let i = this.length; i > position; i--) {
    this[i] = this[i - 1];
  }

  this[position] = value;

  return this;
};

animals.insertAtPosition(2, "hamster");
console.log(animals);

// Adicioando um elemento em uma posição específica do array usando splice
const cars = ["Toyota", "Honda", "Ford"];
cars.splice(1, 0, "Chevrolet", "Nissan", "Tesla");
console.log(cars);
