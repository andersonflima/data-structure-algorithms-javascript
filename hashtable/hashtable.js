const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

var HashTable = function () {
  this.storage = [];
  this.storageLimit = 4;

  this.print = () => {
    console.log(this.storage);
  };

  this.add = (key, value) => {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };

  this.remove = (key) => {
    var index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (var i = 0; i < this.storage[index]; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };

  this.lookup = (key) => {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
};

// Initialize the HashTable
const ht = new HashTable();

// Example 1: Adding key-value pairs
console.log("=== Adding Key-Value Pairs ===");
ht.add("name", "Alice");
ht.add("age", 25);
ht.add("city", "New York");
ht.print();
// Expected Output:
// [
//   ["name", "Alice"],
//   ["age", 25],
//   ["city", "New York"]
// ]

// Example 2: Retrieving values
console.log("\n=== Retrieving Values ===");
console.log("Name:", ht.lookup("name")); // Expected: Alice
console.log("Age:", ht.lookup("age")); // Expected: 25
console.log("City:", ht.lookup("city")); // Expected: New York
console.log("Non-existent key:", ht.lookup("country")); // Expected: undefined

// Example 3: Handling collisions
console.log("\n=== Handling Collisions ===");
ht.add("location", "Brooklyn"); // Assume "location" hashes to the same index as "city"
ht.add("state", "New York"); // Another possible collision
ht.print();
// Expected Output:
// [
//   [["city", "New York"], ["location", "Brooklyn"]],
//   ["state", "New York"],
//   ["name", "Alice"],
//   ["age", 25]
// ]

// Example 4: Updating existing keys
console.log("\n=== Updating Existing Keys ===");
ht.add("name", "Bob");
ht.add("age", 30);
console.log("Updated Name:", ht.lookup("name")); // Expected: Bob
console.log("Updated Age:", ht.lookup("age")); // Expected: 30

// Example 5: Removing keys
console.log("\n=== Removing Keys ===");
ht.remove("city");
ht.remove("name");
ht.print();
// Expected Output:
// [
//   [["location", "Brooklyn"]],
//   ["state", "New York"],
//   ["age", 30]
// ]

// Example 6: Looking up after removal
console.log("\n=== Looking Up After Removal ===");
console.log("City:", ht.lookup("city")); // Expected: undefined
console.log("Name:", ht.lookup("name")); // Expected: undefined
console.log("Location:", ht.lookup("location")); // Expected: Brooklyn
