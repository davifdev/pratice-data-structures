export class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(value) {
    this.items[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  peak() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let binaryString = "";
  let rem;

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(10));
