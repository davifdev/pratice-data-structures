const map = new WeakMap();
const obj1 = { name: "Gandalf" };
const obj2 = { name: "John" };
const obj3 = { name: "Tyrion" };
map.set(obj1, "gandalf@gmail.com");
map.set(obj2, "johnsnow@gmail.com");
map.set(obj3, "tyrion@gmail.com");
console.log(map.get(obj1));
