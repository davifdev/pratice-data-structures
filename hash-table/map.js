const map = new Map();
map.set("Gandalf", "gandalf@gmail.com");
map.set("John", "johnsnow@gmail.com");
map.set("Tyrion", "tyrion@gmail.com");
console.log(map.has("Gandalf"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get("Tyrion"));
