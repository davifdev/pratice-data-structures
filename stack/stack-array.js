// [x] - Adicionar um elemento ao topo da pilha
// [x] - Remover o elemento do topo da pilha
// [x] - Retornar o tamanho da pilha
// [x] - Verificar se a pilha está vazia
// [x] - Pegar o elemento que está no topo da pilha
// [x] - Resetar nossa pilha
// [x] - Listar todos os elementos contidos na pilha

const STACK_IS_EMPTY = "A pilha está vazia";

// O(n) - Linear
export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return STACK_IS_EMPTY;
    return this.items.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peak() {
    if (this.isEmpty()) return STACK_IS_EMPTY;
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) return STACK_IS_EMPTY;

    let objString = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.toString());
