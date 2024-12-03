# Stack Data Structure

## Overview

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the last item added to the stack is the first one to be removed. Imagine a stack of plates: the plate you place last is the one you remove first.

Stacks are commonly used in programming for scenarios like:

- Function call management (call stack)
- Undo functionality in text editors
- Parsing expressions (e.g., parentheses balancing)
- Backtracking algorithms (e.g., Depth First Search)

---

## How Stacks Work

### Key Operations

1. **Push**:

   - Adds an item to the top of the stack.
   - Example: Adding a plate to the stack.

2. **Pop**:

   - Removes the top item from the stack.
   - Example: Taking a plate off the stack.

3. **Peek**:

   - Retrieves the top item without removing it.
   - Example: Looking at the top plate without taking it off.

4. **Size**:
   - Returns the number of items currently in the stack.

---

## Implementation Overview

This repository contains a custom implementation of the stack data structure in JavaScript. The stack is implemented using an array for simplicity. Here are the methods provided:

### Methods

1. **`push(value)`**:

   - Adds `value` to the top of the stack.

2. **`pop()`**:

   - Removes and returns the top item from the stack.
   - Returns `undefined` if the stack is empty.

3. **`peek()`**:

   - Returns the top item without removing it.
   - Returns `undefined` if the stack is empty.

4. **`size()`**:
   - Returns the number of elements in the stack.

---

## Usage Example

Here&apos;s how you can use the stack:

```javascript
// Import or include your stack implementation
var Stack = function () {
  this.storage = new Map();
  this.count = 0;

  this.push = (value) => {
    this.storage.set(this.count, value);
    this.count++;
  };
  this.pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    var result = this.storage.get(this.count);
    this.storage.delete(this.count);
    return result;
  };

  this.size = () => {
    return this.count;
  };
  this.peek = () => {
    return this.storage.get(this.count - 1);
  };
};

var stack = new Stack();

// Test pushing elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Expected output: 3
console.log(stack.peek()); // Expected output: 30

// Test popping elements from the stack
console.log(stack.pop()); // Expected output: 30
console.log(stack.pop()); // Expected output: 20
console.log(stack.size()); // Expected output: 1
console.log(stack.peek()); // Expected output: 10

// Test popping all elements and handling an empty stack
console.log(stack.pop()); // Expected output: 10
console.log(stack.pop()); // Expected output: undefined
console.log(stack.size()); // Expected output: 0
console.log(stack.peek()); // Expected output: undefined

// Test pushing elements after clearing the stack
stack.push(40);
console.log(stack.size()); // Expected output: 1
console.log(stack.peek()); // Expected output: 40
```
