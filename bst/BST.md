# Binary Search Tree (BST)

## Overview

A **Binary Search Tree (BST)** is a binary tree data structure in which each node has at most two children:

- The **left child** contains only nodes with values less than the parent node.
- The **right child** contains only nodes with values greater than the parent node.

BSTs are commonly used in algorithms and systems where quick lookup, insertion, and deletion are essential.

---

## Features of the Implementation

This JavaScript implementation of a **Binary Search Tree (BST)** supports the following operations:

### Key Methods

1. **`insert(data: any): void`**

   - Inserts a new node into the BST with the given value `data`.

2. **`remove(data: any): void`**

   - Removes a node from the BST by its value `data`. Handles all cases:
     - Node with no children (leaf).
     - Node with one child.
     - Node with two children (replacing with the in-order successor).

3. **`isPresent(data: any): boolean`**

   - Checks if a value exists in the BST. Returns `true` if found, otherwise `false`.

4. **Traversal Methods (if implemented)**:
   - `inOrder`: Visits nodes in ascending order.
   - `preOrder`: Visits parent nodes before children.
   - `postOrder`: Visits children before the parent.

---

## Example Code

Here�s how you can use the `BST` implementation:

```javascript
const bst = new BST();

console.log("=== Basic Insertion and Search ===");
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("\n=== Find ===");
console.log(bst.find(10));
console.log(bst.find(7));
console.log(bst.find(100));

console.log("\n=== InOrder postOrder preOrder ===");
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.preOrder());

console.log("\n=== Level Order ===");
console.log(bst.levelOrder());

console.log("\n=== Find Min and Max ===");
console.log(bst.findMin());
console.log(bst.findMax());

console.log("\n=== Edge Case: Empty Tree ===");
const emptyBst = new BST();
console.log(emptyBst.findMin());
console.log(emptyBst.findMax());
console.log(emptyBst.find(10));

console.log("\n=== Edge Case: Single Node Tree ===");
const singleNodeBst = new BST();
singleNodeBst.insert(10);
console.log(singleNodeBst.findMin());
console.log(singleNodeBst.findMax());
console.log(singleNodeBst.find(10));
console.log(singleNodeBst.find(5));

console.log("\n=== Skewed Trees ===");

console.log("\n=== Left Skewed Tree ===");
const leftSkewedBst = new BST();
leftSkewedBst.insert(10);
leftSkewedBst.insert(8);
leftSkewedBst.insert(6);
leftSkewedBst.insert(4);
leftSkewedBst.insert(2);
console.log(leftSkewedBst.inOrder());
console.log(leftSkewedBst.findMin());
console.log(leftSkewedBst.findMax());

console.log("\n=== Right Skewed Tree ===");
const rightSkewedBst = new BST();
rightSkewedBst.insert(10);
rightSkewedBst.insert(12);
rightSkewedBst.insert(14);
rightSkewedBst.insert(16);
rightSkewedBst.insert(18);

console.log(rightSkewedBst.inOrder());
console.log(rightSkewedBst.findMin());
console.log(rightSkewedBst.findMax());

console.log("\n=== Remove Nodes ===");
const removalBst = new BST();
removalBst.insert(10);
removalBst.insert(5);
removalBst.insert(15);
removalBst.insert(3);
removalBst.insert(7);
removalBst.insert(12);
removalBst.insert(18);

removalBst.remove(3);
console.log(removalBst.inOrder());

removalBst.remove(5);
console.log(removalBst.inOrder());

removalBst.remove(10);
console.log(removalBst.inOrder());

console.log("\n=== Traversal: In-Order ===");
const traversalBst = new BST();
traversalBst.insert(10);
traversalBst.insert(5);
traversalBst.insert(15);
traversalBst.insert(3);
traversalBst.insert(7);
traversalBst.insert(12);
traversalBst.insert(18);
console.log(traversalBst.inOrder());

console.log("\n=== Duplicate Values ===");
const duplicateBst = new BST();
duplicateBst.insert(10);
duplicateBst.insert(10);
duplicateBst.insert(5);
duplicateBst.insert(5);
console.log(duplicateBst.inOrder());

console.log("\n=== Tree Height ===");
console.log("\n=== Balanced Tree ===");
const heightBst = new BST();
heightBst.insert(10);
heightBst.insert(5);
heightBst.insert(15);
heightBst.insert(3);
heightBst.insert(7);

console.log(heightBst.height());
console.log(heightBst.findMinHeight());
console.log(heightBst.findMaxHeight());
console.log(heightBst.isBalanced());

console.log("\n=== Unbalanced Tree ===");
const unbalancedBst = new BST();
unbalancedBst.insert(10);
unbalancedBst.insert(20);
unbalancedBst.insert(30);
unbalancedBst.insert(40);
console.log(unbalancedBst.height());
console.log(unbalancedBst.findMinHeight());
console.log(unbalancedBst.findMaxHeight());
console.log(unbalancedBst.isBalanced());
```
