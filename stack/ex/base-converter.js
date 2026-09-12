import { Stack } from "../stack-object.js";

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let number = decNumber;
  let baseString = "";
  let rem;
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!(base >= 2 && base <= 36)) {
    return "a";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(10, 2));
