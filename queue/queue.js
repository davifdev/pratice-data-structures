// Um elemento é sempre adicionado ao final da fila (tail), e o primeiro sempre é o removido.
// [x] - Adicionar um elemento na fila
// [x] - Remover um elemento da fila
// [x] - Verificar qual é o primeiro elemento da fila
// [x] - Verificar se a fila está vazia
// [x] - Retornar o tamanho da fila
// [x] - Limpar todos os elementos de uma fila

export class Queue {
  constructor() {
    this.lowestCount = 0;
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  peak() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
console.log(queue);
queue.clear();
console.log(queue);
