# Priority Queue Data Structure

## Overview

A **priority queue** is an extension of the queue data structure where each element is assigned a priority. Elements with higher priority are dequeued before elements with lower priority, even if they were enqueued later. If two elements have the same priority, they are dequeued in the order they were enqueued (FIFO for same-priority elements).

---

## How the Priority Queue Works

### Key Operations

1. **Enqueue**:

   - Adds an element to the queue based on its priority.

2. **Dequeue**:

   - Removes and returns the element with the highest priority (smallest priority value).

3. **Front**:

   - Returns the element with the highest priority without removing it.

4. **Size**:

   - Returns the number of elements in the queue.

5. **IsEmpty**:

   - Checks if the queue is empty.

6. **PrintCollection**:
   - Prints the current state of the queue.

---

## Implementation Overview

This implementation uses an array (`this.collection`) to store elements. Each element is represented as an array of two values:

- **Element**: The actual value being stored.
- **Priority**: A numerical value representing the priority of the element (smaller numbers indicate higher priority).

---

## Methods

### 1. **`enqueue(element: any): void`**

Adds an element to the queue based on its priority.

- **Input**: `element` - An array `[value, priority]`, where `value` is the element, and `priority` is its numerical priority.
- **Example**:

```javascript
var PriorityQueue = function () {
  this.collection = new Array();

  this.printCollection = () => {
    console.log(this.collection);
  };

  this.enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    let value = this.collection.shift();
    return value[0];
  };
  this.size = () => {
    return this.collection.length;
  };
  this.front = () => {
    return this.collection[0];
  };
  this.isEmpty = () => {
    return this.collection.length === 0;
  };
};

var queue = new PriorityQueue();

// Enqueue tasks with different priorities
queue.enqueue(["Task1", 2]);
queue.enqueue(["Task2", 1]); // Higher priority
queue.enqueue(["Task3", 3]);
queue.enqueue(["Task4", 1]); // Same priority as Task2

queue.printCollection(); // Expected: [["Task2", 1], ["Task4", 1], ["Task1", 2], ["Task3", 3]]

// Dequeue tasks and check the order
console.log(queue.dequeue()); // Expected: "Task2"
console.log(queue.dequeue()); // Expected: "Task4"
console.log(queue.dequeue()); // Expected: "Task1"
console.log(queue.dequeue()); // Expected: "Task3"
console.log(queue.isEmpty()); // Expected: true
```
