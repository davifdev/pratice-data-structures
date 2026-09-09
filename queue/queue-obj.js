// [x] - Adicionar um elemento na fila
// [x] - Remover um elemento da fila
// [x] - Verificar se a fila está vazia
// [x] - Retornar o tamanho da fila
// [x] - Limpar todos os dados de uma fila
// [X] - Listar todos os elementos de uma fila em string

export class Queue {
  constructor() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  enqueue(value) {
    this.items[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  peak() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  clear() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.toString());
console.log(queue);
