# MinHeap Implementation in JavaScript

## Overview

A **MinHeap** is a specialized binary tree-based data structure that satisfies the **heap property**:

- **Heap Property**: In a MinHeap, for any given node `C`, if `P` is a parent node of `C`, then the key (value) of `P` is less than or equal to the key of `C`.

This property ensures that the smallest element is always at the root of the heap, allowing efficient retrieval and removal of the minimum element.

### Key Characteristics of MinHeap

1. **Complete Binary Tree**:
   - All levels of the tree are fully filled except possibly the last level, which is filled from left to right.
2. **Heap Property**:
   - Each parent node is less than or equal to its child nodes.
3. **Array Representation**:
   - MinHeaps are typically implemented using arrays for efficient storage and access.

---

## How a MinHeap Works

### Structure

A MinHeap can be visualized as a binary tree where each node has at most two children, and the tree is complete. However, it's commonly implemented using an array to optimize space and performance.

### Array Representation

- **Parent-Child Relationship**:
  - **Parent Index**: For any element at index `i`, its parent is at index `Math.floor(i / 2)`.
  - **Left Child Index**: `2 * i`
  - **Right Child Index**: `2 * i + 1`
- **Zero Index**:
  - Typically, index `0` is unused to simplify parent and child calculations.

### Key Operations

1. **Insertion (`add`)**:

   - Add the element to the end of the heap.
   - **Heapify Up**: Compare the added element with its parent and swap if necessary to maintain the heap property.

2. **Removal (`remove`)**:

   - Remove the root element (minimum).
   - Replace the root with the last element in the heap.
   - **Heapify Down**: Compare the new root with its children and swap with the smaller child to maintain the heap property.

3. **Heapify (`heapify`)**:

   - Ensures the heap property is maintained by rearranging elements.

4. **Sort (`sort`)**:
   - Extract elements one by one from the heap to produce a sorted array.

---

## Your MinHeap Implementation

### Implementation Details

Below is the complete implementation of the **MinHeap** class in JavaScript:

```javascript
// Create a new MinHeap instance
const minHeap = new MinHeap();

console.log("=== MinHeap Test Cases ===");

// Test 1: Adding Elements to the MinHeap
console.log("\n1. Adding Elements");
minHeap.add(10);
minHeap.add(5);
minHeap.add(3);
minHeap.add(8);
minHeap.add(2);
minHeap.add(15);
minHeap.add(20);
minHeap.add(7);
minHeap.add(1);
console.log("Heap after adding elements:", minHeap.heap);
// Expected Heap (array representation): [null, 1, 2, 3, 5, 8, 15, 20, 7, 10]
// Note: Assuming heap[0] is unused to simplify parent/child calculations

// Test 2: Removing Elements from the MinHeap
console.log("\n2. Removing Elements");
console.log("Removed element:", minHeap.remove()); // Expected: 1
console.log("Heap after removing 1:", minHeap.heap);
console.log("Removed element:", minHeap.remove()); // Expected: 2
console.log("Heap after removing 2:", minHeap.heap);
console.log("Removed element:", minHeap.remove()); // Expected: 3
console.log("Heap after removing 3:", minHeap.heap);

// Test 3: Adding Duplicate Elements
console.log("\n3. Adding Duplicate Elements");
minHeap.add(5);
minHeap.add(10);
minHeap.add(5);
console.log("Heap after adding duplicates:", minHeap.heap);
// Expected Heap: Duplicates should be handled correctly, maintaining min-heap property

// Test 4: Removing All Elements
console.log("\n4. Removing All Elements");
while (minHeap.heap.length > 1) {
  // Assuming heap[0] is unused
  console.log("Removed element:", minHeap.remove());
}
console.log("Heap after removing all elements:", minHeap.heap);
// Expected Heap: [null]

// Test 5: Removing from an Empty Heap
console.log("\n5. Removing from an Empty Heap");
console.log("Removed element:", minHeap.remove()); // Expected: null or appropriate handling

// Test 6: Adding Elements After Removing All
console.log("\n6. Adding Elements After Removing All");
minHeap.add(12);
minHeap.add(4);
minHeap.add(6);
console.log("Heap after adding elements:", minHeap.heap);
// Expected Heap: [null, 4, 12, 6]

// Test 7: Sorting Elements Using MinHeap
console.log("\n7. Sorting Elements Using MinHeap");
minHeap.add(3);
minHeap.add(14);
minHeap.add(9);
minHeap.add(2);
minHeap.add(7);
console.log("Heap before sorting:", minHeap.heap);
const sortedArray = minHeap.sort();
console.log("Sorted array:", sortedArray);
// Expected Sorted Array: [2, 3, 4, 6, 7, 9, 12, 14]

console.log("\n1. heapify with an empty array");
minHeap.heapify([]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 2: heapify with a single-element array
console.log("\n2. heapify with a single-element array");
minHeap.heapify([10]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 10]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 3: heapify with an already min-heap array
console.log("\n3. heapify with an already min-heap array");
minHeap.heapify([10, 20, 30, 40, 50]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 10, 20, 30, 40, 50]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 4: heapify with a random unsorted array
console.log("\n4. heapify with a random unsorted array");
minHeap.heapify([50, 30, 20, 15, 5, 10, 25]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 5, 15, 10, 30, 50, 20, 25]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 5: heapify with duplicate elements
console.log("\n5. heapify with duplicate elements");
minHeap.heapify([20, 15, 20, 10, 10, 25, 25]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 10, 10, 20, 15, 20, 25, 25]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 6: heapify with a large array
console.log("\n6. heapify with a large array");
const largeArray = [];
for (let i = 100; i >= 1; i--) {
  largeArray.push(i);
}
minHeap.heapify(largeArray);
console.log(
  "Heap after heapify (first 10 elements):",
  minHeap.heap.slice(0, 11),
);
console.log("Heap size:", minHeap.heap.length - 1); // Expected: 100
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 7: heapify with negative and positive integers
console.log("\n7. heapify with negative and positive integers");
minHeap.heapify([0, -10, 5, -20, 15, 25, -5]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, -20, -10, -5, 15, 0, 25, 5]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 8: heapify with floating-point numbers
console.log("\n8. heapify with floating-point numbers");
minHeap.heapify([3.5, 2.1, 5.6, 1.2, 4.8]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 1.2, 2.1, 5.6, 3.5, 4.8]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 9: heapify with mixed data types (should handle only numbers)
console.log("\n9. heapify with mixed data types");
try {
  minHeap.heapify([10, "20", 30, null, 50]);
  console.log("Heap after heapify:", minHeap.print());
  console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Depending on implementation
} catch (error) {
  console.log("Error:", error.message);
}
// Expected: Depending on implementation, could throw an error or handle strings appropriately

// Test 10: heapify with all elements equal
console.log("\n10. heapify with all elements equal");
minHeap.heapify([10, 10, 10, 10, 10]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 10, 10, 10, 10, 10]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 11: heapify and then perform add and remove operations
console.log("\n11. heapify followed by add and remove operations");
minHeap.heapify([40, 20, 30, 10, 5, 25, 35]);
console.log("Heap after heapify:", minHeap.print());
// Expected: [null, 5, 10, 25, 40, 20, 30, 35]
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

minHeap.add(2);
console.log("Heap after adding 2:", minHeap.print());
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

const removedElement = minHeap.remove();
console.log(`Removed element: ${removedElement}`); // Expected: 2
console.log("Heap after removing 2:", minHeap.print());
console.log("Is valid MinHeap?", isMinHeap(minHeap.heap)); // Expected: true

// Test 8: Adding Large Number of Elements
console.log("\n8. Adding Large Number of Elements");
const largeHeap = new MinHeap();
for (let i = 100; i >= 1; i--) {
  largeHeap.add(i);
}
console.log("Heap after adding 100 elements:", largeHeap.heap.slice(0, 11)); // Display first 10 elements
// Expected Heap[1]: 1 (smallest element)
console.log("Heap size:", largeHeap.heap.length - 1); // Expected: 100

// Test 9: Sorting a Large Heap
console.log("\n9. Sorting a Large Heap");
const largeSortedArray = largeHeap.sort();
console.log(
  "First 10 elements of sorted array:",
  largeSortedArray.slice(0, 10),
); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Last 10 elements of sorted array:", largeSortedArray.slice(-10)); // Expected: [91, 92, ..., 100]

// Test 10: Ensuring Heap Property After Each Operation
console.log("\n10. Ensuring Heap Property After Each Operation");
const propertyHeap = new MinHeap();
const elementsToAdd = [20, 15, 30, 10, 5, 25, 35, 2, 7];
elementsToAdd.forEach((elem) => {
  propertyHeap.add(elem);
  // Verify heap property by ensuring each parent is <= its children
  let isValid = true;
  for (let i = 1; i < propertyHeap.heap.length; i++) {
    let left = 2 * i;
    let right = 2 * i + 1;
    if (
      left < propertyHeap.heap.length &&
      propertyHeap.heap[i] > propertyHeap.heap[left]
    ) {
      isValid = false;
      break;
    }
    if (
      right < propertyHeap.heap.length &&
      propertyHeap.heap[i] > propertyHeap.heap[right]
    ) {
      isValid = false;
      break;
    }
  }
  console.log(`Added ${elem}, Heap valid:`, isValid); // Expected: true for all additions
});
console.log("Final Heap:", propertyHeap.heap);

// Test 11: Removing Elements and Verifying Heap Property
console.log("\n11. Removing Elements and Verifying Heap Property");
while (propertyHeap.heap.length > 1) {
  const removed = propertyHeap.remove();
  console.log(`Removed element: ${removed}`);
  // Verify heap property
  let isValid = true;
  for (let i = 1; i < propertyHeap.heap.length; i++) {
    let left = 2 * i;
    let right = 2 * i + 1;
    if (
      left < propertyHeap.heap.length &&
      propertyHeap.heap[i] > propertyHeap.heap[left]
    ) {
      isValid = false;
      break;
    }
    if (
      right < propertyHeap.heap.length &&
      propertyHeap.heap[i] > propertyHeap.heap[right]
    ) {
      isValid = false;
      break;
    }
  }
  console.log(`Heap valid after removing ${removed}:`, isValid); // Expected: true for all removals
}
console.log("Heap after removing all elements:", propertyHeap.heap);
// Expected Heap: [null]
//
//
//
// Create a new MinHeap instance

// Test Utility Function: Verify the MinHeap property
function isMinHeap(heap) {
  for (let i = 1; i <= Math.floor(heap.length / 2); i++) {
    let left = 2 * i;
    let right = 2 * i + 1;
    if (left < heap.length && heap[i] > heap[left]) return false;
    if (right < heap.length && heap[i] > heap[right]) return false;
  }
  return true;
}
// Expected Heap: [null]
```
