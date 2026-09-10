const CONSTANTS = {
  DEQUE_IS_EMPTY: "O deque está vazio!",
};

export class Deque {
  constructor() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.items[0] = element;
      this.lowestCount = 0;
      this.count++;
    }
  }

  removeFront() {
    if (this.isEmpty()) return CONSTANTS.DEQUE_IS_EMPTY;

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) return CONSTANTS.DEQUE_IS_EMPTY;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return CONSTANTS.DEQUE_IS_EMPTY;

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const deque = new Deque();
deque.addFront(1);
deque.addFront(2);
deque.addFront(3);
console.log(deque.removeFront());
deque.addFront(3);
deque.addFront(4);
console.log(deque.removeBack());
deque.addBack(5);
console.log(deque);
