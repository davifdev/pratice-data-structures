const DEQUE_IS_EMPTY = "O Deque está vazio!";
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
    if (this.isEmpty()) return DEQUE_IS_EMPTY;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) return DEQUE_IS_EMPTY;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peakFront() {
    if (this.isEmpty()) return DEQUE_IS_EMPTY;
    return this.items[this.lowestCount];
  }

  peakBack() {
    if (this.isEmpty()) return DEQUE_IS_EMPTY;
    return this.items[this.count - 1];
  }

  clear() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return DEQUE_IS_EMPTY;

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}
