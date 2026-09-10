import { Queue } from "./queue.js";

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    eliminated: eliminatedList,
  };
}

const names = ["John", "Jane", "Jack", "Lucia", "Trevor", "Luke"];
const result = hotPotato(names, 3);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot potato game.`);
});
console.log(`The winner is: ${result.winner}`);
