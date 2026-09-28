import { defaultToString } from "../utils/index.js";

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class HashTableLinearProbing {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1017;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      return this.table[position].value;
    }
    let index = position + 1;
    while (this.table[index] != null && this.table[index].key !== key) {
      index++;
    }
    if (this.table[index] != null && this.table[index].key === key) {
      return this.table[position].value;
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
      return false;
    }
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}

const hash = new HashTableLinearProbing();
hash.put("Ygritte", "ygritte@gmail.com");
hash.put("Jonathan", "jonathan@gmail.com");
hash.put("Jamie", "jamie@gmail.com");
hash.put("Jack", "jack@gmail.com");
hash.put("Jasmine", "jasmine@gmail.com");
hash.put("Jake", "jake@gmail.com");
hash.put("Nathan", "nathan@gmail.com");
hash.put("Athelstan", "athelstan@gmail.com");
hash.put("Sue", "sue@gmail.com");
hash.put("Aethelwulf", "aethelwulf@gmail.com");
hash.put("Sargeras", "sargeras@gmail.com");
console.log(hash);
