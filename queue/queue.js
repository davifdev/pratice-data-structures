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

  // Adicionar elemento na fila
  enqueue(value) {
    this.items.push(value);
  }

  // Remover um elemento da fila
  dequeue() {
    // Se a fila estiver vazia retornar undefined
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  // Verificar se a fila está vazia
  isEmpty() {
    return this.size() === 0;
  }

  // Retornar tamanho da fila
  size() {
    return this.items.length;
  }

  // Pegar o primeiro elemento da fila
  peak() {
    // Se a fila estiver vazia retornar undefined
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  // Limpar todos os elementos da fila
  clear() {
    this.items = [];
  }
}
