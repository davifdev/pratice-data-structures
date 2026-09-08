const friends = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Chris", age: 25 },
];

function comparePersonASC(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

function comparePersonDESC(a, b) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }

  return 0;
}

console.log(friends.sort(comparePersonDESC));
