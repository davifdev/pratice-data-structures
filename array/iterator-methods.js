const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Retorna um iterator que contém as chave/valor do array
let aEntries = numbers.entries();
console.log(aEntries.next().value);

// Retorna um iterator que contém as chaves do array
let aKeys = numbers.keys();
console.log(aKeys.next());

// Retorna um iterator que contém os valores do array
let aValues = numbers.values();
console.log(aValues.next());

const newArr = Array.from(numbers, (x) => x % 2 == 0);
console.log(newArr);

const newArrOf = Array.of(1, 2, 3, 4, 5, 6);
console.log(newArrOf);

const arrFill = newArr.fill(2);
console.log(arrFill);

const initializedArrFill = Array(6).fill(3);
console.log(initializedArrFill);
