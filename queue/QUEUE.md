# Queue Data Structure

## Overview

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the first element added to the queue is the first one to be removed. Queues are commonly used in scenarios where order matters, such as task scheduling or managing requests.

---

## How the `Queue` Works

### Key Operations

1. **Enqueue**:

   - Adds an element to the end of the queue.

2. **Dequeue**:

   - Removes and returns the first element in the queue.

3. **Front**:

   - Returns the first element in the queue without removing it.

4. **Size**:

   - Returns the number of elements currently in the queue.

5. **IsEmpty**:
   - Checks if the queue is empty.

---

## Implementation Overview

This repository contains a custom implementation of the `Queue` data structure in JavaScript. The `Queue` class provides methods to perform various queue operations, including `enqueue`, `dequeue`, and more.

---

## Usage Example

Here&apos;s how you can use the `Queue` implementation:

```javascript
// Create a new Queue instance
var Queue = function () {
  this.collection = new Array();

  this.print = () => {
    console.log(this.collection);
  };

  this.enqueue = (element) => {
    this.collection.push(element);
  };

  this.dequeue = () => {
    return this.collection.shift();
  };

  this.front = () => {
    return this.collection[0];
  };

  this.size = () => {
    return this.collection.length;
  };

  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};

// Create a new Queue instance
var queue = new Queue();

// Add elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // Expected output: 3
console.log(queue.front()); // Expected output: 10

// Remove elements from the queue
console.log(queue.dequeue()); // Expected output: 10
console.log(queue.dequeue()); // Expected output: 20
console.log(queue.size()); // Expected output: 1
console.log(queue.front()); // Expected output: 30

// Check if the queue is empty
console.log(queue.isEmpty()); // Expected output: false
queue.dequeue();
console.log(queue.isEmpty()); // Expected output: true

// Print the queue's current state
queue.enqueue(40);
queue.print(); // Expected output: [40]
```
