var MinHeap = function () {
  this.heap = [null];

  this.add = function (num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.sort = function () {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

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
