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
    if (!this.isEmpty()) return undefined;
    return this.items[this.count - 1];
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

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let number = decNumber;
  let baseString = "";
  let rem;
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(10, 2));
console.log(baseConverter(104558615, 8));
console.log(baseConverter(104558615, 16));
console.log(baseConverter(104558615, 36));
