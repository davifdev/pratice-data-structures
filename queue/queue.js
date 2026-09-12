// Um elemento é sempre adicionado ao final da fila (tail), e o primeiro sempre é o removido.
// [x] - Adicionar um elemento na fila
// [x] - Remover um elemento da fila
// [x] - Verificar qual é o primeiro elemento da fila
// [x] - Verificar se a fila está vazia
// [x] - Retornar o tamanho da fila
// [x] - Limpar todos os elementos de uma fila

const QUEUE_IS_EMPTY = "A fila está vazia!";
export class Queue {
  constructor() {
    this.lowestCount = 0;
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return QUEUE_IS_EMPTY;
    return this.items.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peak() {
    if (this.isEmpty()) return QUEUE_IS_EMPTY;
    return this.items[this.lowestCount];
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) return QUEUE_IS_EMPTY;

    let objString = this.items[this.lowestCount];
    for (let i = 1; i < this.items.length; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.toString());
