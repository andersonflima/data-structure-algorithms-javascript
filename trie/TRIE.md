# Trie Implementation in JavaScript

## Overview

A **Trie** (pronounced as "try") is a tree-like data structure used for storing a dynamic set of strings. It is particularly useful for searching words, autocomplete systems, and prefix matching.

### Key Features of a Trie

1. **Efficient Search**:
   - Tries provide fast lookups for words or prefixes, typically in \(O(L)\), where \(L\) is the length of the word.
2. **Dynamic Storage**:
   - Tries dynamically allocate memory for only the characters stored, avoiding the need for fixed sizes.
3. **Prefix Matching**:
   - Easily find all words with a given prefix, making it ideal for autocomplete systems.

---

## How the Trie Works

### Structure

1. **Nodes**:
   - Each node represents a character in a string.
   - Nodes store:
     - A reference to their children.
     - A flag (`isWord`) to indicate whether the node represents the end of a word.
2. **Root Node**:
   - The starting point of the Trie, which is empty initially.

### Key Operations

1. **Add (`add`)**:

   - Inserts a word into the Trie by creating nodes for each character.
   - Marks the last character of the word with `isWord = true`.

2. **Check Word (`isWord`)**:

   - Verifies if a given string exists in the Trie as a complete word.

3. **Retrieve All Words (`print`)**:
   - Traverses the Trie to collect all stored words.

---

## Implementation Details

### Methods

#### 1. `add(word: string): void`

- Adds a new word to the Trie.
- **Logic**:
  - Start from the root node.
  - For each character in the word:
    - If the character does not exist as a child, create a new node.
  - Mark the last character's node as a word by setting `isWord = true`.

#### 2. `isWord(word: string): boolean`

- Checks if a word exists in the Trie.
- **Logic**:
  - Traverse the Trie character by character.
  - If a character is missing or the last character is not marked as `isWord`, return `false`.
  - Return `true` if the traversal ends at a node marked as `isWord`.

#### 3. `print(): string[]`

- Retrieves all words stored in the Trie.
- **Logic**:
  - Perform a depth-first traversal (DFS) to collect all words ending in nodes marked as `isWord`.

---

## Example Usage

```javascript
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
```
