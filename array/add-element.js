// Adicionando um elemento ao final do array
const fruits = ["Apple", "Grape", "Watermelon", "Strawberry", "Banana"];
fruits[fruits.length - 1] = "Orange";
console.log(fruits);
// Adicionando um elemento ao final do array usando push
fruits.push("Guava");
console.log(fruits);

// Adicionando um elemento ao início do array
const colors = ["Red", "Green", "Blue", "Brown"];
Array.prototype.addElementFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};
colors.addElementFirstPosition("Pink");
console.log(colors);

// Adicionando um elemento ao início do array usando unshift
colors.unshift("Grey");
console.log(colors);

// Adicioando um elemento em uma posição específica do array
const brands = ["Samsumg", "Apple", "Chevrolet", "Yamaha"];
Array.prototype.addElementAnyPosition = function (value, position) {
  for (let i = this.length; i > position; i--) {
    this[i] = this[i - 1];
  }

  this[position] = value;
};
brands.addElementAnyPosition("Microsoft", 2);
console.log(brands);

// Adicioando um elemento em uma posição específica do array usando splice
brands.splice(
  2,
  0,
  "Oracle",
  "IBM",
  "Berkshire Hataway",
  "Meta",
  "Anthropic",
  "OpenAI",
  "Tesla",
  "Starlink",
  "SpaceX",
  "ByteDance",
);
console.log(brands);
