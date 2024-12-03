# LinkedList Implementation in JavaScript

## Overview

A **LinkedList** is a linear data structure consisting of nodes where each node contains:

1. **Element**: The data stored in the node.
2. **Pointer**: A reference to the next node in the sequence.

Unlike arrays, linked lists do not store elements in contiguous memory locations. This allows for dynamic memory allocation and efficient insertion and deletion operations.

---

## How a LinkedList Works

### Components of a LinkedList

1. **Node**:

   - A basic unit of a linked list containing an `element` and a `next` pointer.
   - Example:

     ```javascript
     class Node {
       constructor(element, next = null) {
         this.element = element;
         this.next = next;
       }
     }
     ```

2. **Head**:

   - The starting node of the linked list.

3. **Tail** (Optional in some implementations):
   - The last node in the linked list, where `next` is `null`.

### Key Operations

1. **Add**:

   - Add a new element to the end of the linked list.
   - If the list is empty, the new node becomes the head.

2. **Remove**:

   - Removes an element by traversing the list and adjusting pointers.

3. **Find**:

   - Locates a node by its value.

4. **IndexOf**:

   - Finds the position (index) of a given element in the list.

5. **Has**:

   - Checks if an element exists in the list.

6. **IsEmpty**:
   - Checks if the list contains no elements.

---

## Your LinkedList Implementation

### Methods

#### 1. **`add(element: any): void`**

Adds a new element to the end of the list.

- **Logic**:
  - If the list is empty (`this.head === null`), the new node becomes the head.
  - Otherwise, traverse to the last node and append the new node.
- **Example**:

```javascript
// Initialize the LinkedList class
var Node = function (element) {
  this.element = element;
  this.next = null;
};

var LinkedList = function () {
  this.length = 0;
  this.head = null;

  this.size = () => {
    return this.length;
  };

  this.head = () => {
    return this.head;
  };

  this.add = (element) => {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  };

  this.remove = (element) => {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    if (currentNode.element === element) {
      this.head = currentNode.next;
      this.length--;
      return;
    }

    while (currentNode && currentNode.element !== element) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return;
    }

    previousNode.next = currentNode.next;
    this.length--;
  };

  this.isEmpty = () => {
    return this.length === 0;
  };

  this.indexOf = (element) => {
    var currentNode = this.head;
    var index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.find = (item) => {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.element === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  this.has = (element) => {
    return this.indexOf(element) !== -1;
  };

  this.addAt = (index, element) => {
    if (index < 0 || index > this.length) {
      return false;
    }

    const node = new Node(element);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  };

  this.removeAt = (index) => {
    if (index < 0 || index >= this.length) {
      console.log("Index out of bounds");
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.element;
  };

  this.toString = () => {
    var currentNode = this.head;
    var result = [];
    while (currentNode) {
      currentNode.element && result.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return result.join(" -> ");
  };
};

// Initialize the LinkedList class
const linkedList = new LinkedList();

console.log("=== LinkedList Test Cases ===");

console.log("\n1. Adding Elements");
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
console.log("List after adding elements:", linkedList.toString());

console.log("\n2. Checking if the List is Empty");
console.log("Is list empty?", linkedList.isEmpty());

console.log("\n3. Finding Elements");
console.log("Find 20:", linkedList.find(20));
console.log("Find 40:", linkedList.find(40));

console.log("\n4. Getting Index of Elements");
console.log("Index of 10:", linkedList.indexOf(10));
console.log("Index of 20:", linkedList.indexOf(20));
console.log("Index of 40:", linkedList.indexOf(40));

console.log("\n5. Checking if an Element Exists");
console.log("Has 30?", linkedList.has(30));
console.log("Has 40?", linkedList.has(40));

console.log("\n6. Removing Elements");
linkedList.remove(20);
console.log("List after removing 20:", linkedList.toString());
linkedList.remove(40);
console.log("List after trying to remove 40:", linkedList.toString());

console.log("\n7. Adding Elements at Specific Positions");
linkedList.addAt(0, 5); // Add at the beginning
linkedList.addAt(1, 10); // Add at the beginning
linkedList.addAt(2, 25); // Add at the middle
linkedList.addAt(3, 30); // Add at the middle
linkedList.add(35); // Add at the end
console.log("list size", linkedList.size());
console.log(
  "List after adding elements at specific positions:",
  linkedList.toString(),
);

console.log("\n8. Removing Elements at Specific Positions");

console.log(
  "List before removing elements at specific positions:",
  linkedList.toString(),
);

linkedList.removeAt(0); // Remove the first element
console.log("List after removing at index 0:", linkedList.toString());
linkedList.removeAt(2); // Remove from the middle
console.log("List after removing at index 2:", linkedList.toString());
linkedList.removeAt(3); // Remove the last element
console.log("List after removing at index 3:", linkedList.toString());
```
