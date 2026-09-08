// Removendo um elemento ao final do array usando o método pop()
const fruits = ["apple", "orange", "grape", "pineapple"];
const lastElement = fruits.pop();

// Removendo um elemento ao final do array sem utilizar o método pop()
delete fruits[fruits.length - 1];
const newFruits = [];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] !== undefined) {
    newFruits.push(fruits[i]);
  }
}

console.log(newFruits);

// Removendo um elemento do ínicio do array utilizando o método shift()
const cars = ["Honda", "Hyundai", "Chevrolet", "Fiat", "Tesla"];
cars.shift();
console.log(cars);

// Removendo um elemento do ínicio do array sem utilizar o método shift()
Array.prototype.reIndex = function (myArray) {
  const newArr = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArr.push(myArray[i]);
    }
  }

  return newArr;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

console.log(cars.removeFirstPosition());
