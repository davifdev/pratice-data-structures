// [x] - Adicionar um elemento ao topo da pilha
// [x] - Remover o elemento do topo da pilha
// [x] - Retornar o tamanho da pilha
// [x] - Verificar se a pilha está vazia
// [x] - Pegar o elemento que está no topo da pilha
// [x] - Resetar nossa pilha
// [x] - Listar todos os elementos contidos na pilha

const STACK_IS_EMPTY = "A pilha está vazia";
// O(1) - Constante
export class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return STACK_IS_EMPTY;

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
    if (this.isEmpty()) return STACK_IS_EMPTY;
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return STACK_IS_EMPTY;

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.toString());
