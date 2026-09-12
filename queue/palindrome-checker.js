import { Deque } from "./deque.js";

function palindromerChecker(aString) {
  if (aString == null || aString.trim().length === 0) {
    return false;
  }

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  let firstChar, lastChar;
  let isEqual = true;

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(palindromerChecker("subi no onibus"));
