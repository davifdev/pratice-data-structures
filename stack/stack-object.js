// [x] - Adicionar um elemento ao topo da pilha.
// [x] - Remover um elemento ao topo da pilha.
// [x] - Verificar se a pilha está vazia.
// [x] - Verificar o tamanho da pilha.
// [x] - Pegar o elemento que está no topo da pilha.
// [x] - Limpar todos os dados de uma pilha.
// [x] - Listar todos os elementos em string.

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
    this.items = {};
    this.count = 0;
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

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(4);
console.log(stack.pop(4));
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peak());
console.log(stack.toString());
stack.clear();
stack.push(5);
stack.push(3);
stack.push(4);
console.log(stack);
