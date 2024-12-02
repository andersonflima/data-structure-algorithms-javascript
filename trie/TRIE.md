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
const trie = new Trie();

// Add words to the Trie
trie.add("apple");
trie.add("app");
trie.add("banana");
trie.add("band");
trie.add("bandana");
trie.add("bat");

// Check if words exist
console.log(trie.isWord("apple")); // true
console.log(trie.isWord("app")); // true
console.log(trie.isWord("appl")); // false
console.log(trie.isWord("band")); // true
console.log(trie.isWord("batman")); // false

// Retrieve all words
console.log(trie.print());
// Expected: ["apple", "app", "banana", "band", "bandana", "bat"]

// Add words with a shared prefix
trie.add("batman");
console.log(trie.isWord("batman")); // true

// Retrieve updated list of words
console.log(trie.print());
// Expected: ["apple", "app", "banana", "band", "bandana", "bat", "batman"]

// Add and check single-character words
trie.add("a");
trie.add("b");
console.log(trie.isWord("a")); // true
console.log(trie.isWord("b")); // true
console.log(trie.isWord("c")); // false
console.log(trie.print());
// Expected: ["apple", "app", "banana", "band", "bandana", "bat", "batman", "a", "b"]
```
