import { Queue } from "./queue-obj.js";

function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    eliminate: eliminatedList,
  };
}

const names = ["Jane", "John", "Lucia", "Jason", "Carl", "Ashley"];
const result = hotPotato(names, 3);
result.eliminate.forEach((name) => {
  console.log(`${name} was eliminated the hot potato game`);
});
console.log(`The winner is ${result.winner}`);
