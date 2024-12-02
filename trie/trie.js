var Node = function () {
  this.keys = new Map();
  this.end = false;

  this.setEnd = () => {
    this.end = true;
  };

  this.isEnd = () => {
    return this.end;
  };
};

var Trie = function () {
  this.root = new Node();

  this.add = (input, node = this.root) => {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = (word) => {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = () => {
    let words = new Array();
    let search = (node, string) => {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

const trie = new Trie();

console.log("=== Trie Test Cases ===");

// Test 1: Add words to the Trie
console.log("\n1. Adding Words");
trie.add("apple");
trie.add("app");
trie.add("banana");
trie.add("band");
trie.add("bandana");
trie.add("bat");
console.log("Words added to the Trie.");

// Test 2: Check if words exist in the Trie
console.log("\n2. Checking Words");
console.log("Is 'apple' a word?", trie.isWord("apple")); // Expected: true
console.log("Is 'app' a word?", trie.isWord("app")); // Expected: true
console.log("Is 'appl' a word?", trie.isWord("appl")); // Expected: false
console.log("Is 'banana' a word?", trie.isWord("banana")); // Expected: true
console.log("Is 'band' a word?", trie.isWord("band")); // Expected: true
console.log("Is 'bandana' a word?", trie.isWord("bandana")); // Expected: true
console.log("Is 'bat' a word?", trie.isWord("bat")); // Expected: true
console.log("Is 'cat' a word?", trie.isWord("cat")); // Expected: false

// Test 3: Retrieve all words from the Trie
console.log("\n3. Retrieving All Words");
const allWords = trie.print();
console.log("All words in the Trie:", allWords);
// Expected: ["apple", "app", "banana", "band", "bandana", "bat"]

// Test 4: Add words with a shared prefix and check existence
console.log("\n4. Adding Words with Shared Prefix");
trie.add("batman");
console.log("Is 'bat' a word?", trie.isWord("bat")); // Expected: true
console.log("Is 'batman' a word?", trie.isWord("batman")); // Expected: true
console.log("All words in the Trie:", trie.print());
// Expected: ["apple", "app", "banana", "band", "bandana", "bat", "batman"]

// Test 5: Edge cases
console.log("\n5. Edge Cases");
console.log("Is an empty string a word?", trie.isWord("")); // Expected: false
console.log(
  "All words in the Trie (should not include empty string):",
  trie.print(),
);
// Expected: ["apple", "app", "banana", "band", "bandana", "bat", "batman"]

// Test 6: Adding and checking single-character words
console.log("\n6. Adding and Checking Single-Character Words");
trie.add("a");
trie.add("b");
console.log("Is 'a' a word?", trie.isWord("a")); // Expected: true
console.log("Is 'b' a word?", trie.isWord("b")); // Expected: true
console.log("Is 'c' a word?", trie.isWord("c")); // Expected: false
console.log("All words in the Trie:", trie.print());
// Expected: ["apple", "app", "banana", "band", "bandana", "bat", "batman", "a", "b"]
