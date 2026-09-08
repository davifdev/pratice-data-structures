// [x] - Adicionar um elemento ao topo da pilha.
// [x] - Remover um elemento ao topo da pilha.
// [x] - Verificar se a pilha está vazia.
// [x] - Verificar o tamanho da pilha.
// [x] - Pegar o elemento que está no topo da pilha.
// [x] - Limpar todos os dados de uma pilha.

export class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peak() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(2);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peak());
stack.clear();
console.log(stack);
