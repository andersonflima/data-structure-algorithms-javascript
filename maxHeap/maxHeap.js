var MaxHeap = function () {
  this.heap = [null];

  this.add = function (value) {
    this.heap.push(value);
    var index = this.heap.length - 1;
    var parentIndex = Math.floor(index / 2);

    while (this.heap[parentIndex] < this.heap[index]) {
      var temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[index];
      this.heap[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  };

  this.remove = function () {
    if (this.heap.length === 1) {
      return null;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    var max = this.heap[1];
    this.heap[1] = this.heap.pop();
    var index = 1;
    var leftIndex = index * 2;
    var rightIndex = index * 2 + 1;
    var maxIndex =
      this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;

    while (this.heap[index] < this.heap[maxIndex]) {
      var temp = this.heap[index];
      this.heap[index] = this.heap[maxIndex];
      this.heap[maxIndex] = temp;
      index = maxIndex;
      leftIndex = index * 2;
      rightIndex = index * 2 + 1;
      maxIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
    }

    return max;
  };

  this.print = function () {
    return this.heap;
  };

  this.sort = function () {
    var sorted = [];
    while (this.heap.length > 1) {
      sorted.push(this.remove());
    }
    return sorted;
  };
};

// Create a new MaxHeap instance
const maxHeap = new MaxHeap();

console.log("=== MaxHeap Test Cases ===");

// Test 1: Adding Elements to the MaxHeap
console.log("\n1. Adding Elements");
maxHeap.add(10);
maxHeap.add(20);
maxHeap.add(15);
maxHeap.add(30);
maxHeap.add(40);
maxHeap.add(50);
maxHeap.add(25);
maxHeap.add(35);
maxHeap.add(5);
console.log("Heap after adding elements:", maxHeap.print());
// Expected Heap (array representation): [null, 50, 35, 25, 30, 40, 15, 20, 10, 5]

// Test 2: Removing Elements from the MaxHeap
console.log("\n2. Removing Elements");
console.log("Removed element:", maxHeap.remove()); // Expected: 50
console.log("Heap after removing 50:", maxHeap.print());
console.log("Removed element:", maxHeap.remove()); // Expected: 40
console.log("Heap after removing 40:", maxHeap.print());
console.log("Removed element:", maxHeap.remove()); // Expected: 35
console.log("Heap after removing 35:", maxHeap.print());

// Test 3: Adding Duplicate Elements
console.log("\n3. Adding Duplicate Elements");
maxHeap.add(25);
maxHeap.add(40);
maxHeap.add(25);
console.log("Heap after adding duplicates:", maxHeap.print());
// Expected Heap: Duplicates should be handled correctly, maintaining max-heap property

// Test 4: Removing All Elements
console.log("\n4. Removing All Elements");
while (maxHeap.heap.length > 1) {
  // Assuming heap[0] is unused
  console.log("Removed element:", maxHeap.remove());
}
console.log("Heap after removing all elements:", maxHeap.print());
// Expected Heap: [null]

// Test 5: Removing from an Empty Heap
console.log("\n5. Removing from an Empty Heap");
console.log("Removed element:", maxHeap.remove()); // Expected: null or appropriate handling

// Test 6: Adding Elements After Removing All
console.log("\n6. Adding Elements After Removing All");
maxHeap.add(12);
maxHeap.add(4);
maxHeap.add(6);
console.log("Heap after adding elements:", maxHeap.print());
// Expected Heap: [null, 12, 4, 6]

// Test 7: Sorting Elements Using MaxHeap
console.log("\n7. Sorting Elements Using MaxHeap");
maxHeap.add(3);
maxHeap.add(14);
maxHeap.add(9);
maxHeap.add(2);
maxHeap.add(7);
console.log("Heap before sorting:", maxHeap.print());
const sortedArray = maxHeap.sort();
console.log("Sorted array:", sortedArray);
// Expected Sorted Array (descending order): [14, 12, 9, 7, 6, 4, 3, 2]

// Test 8: Adding a Large Number of Elements
console.log("\n8. Adding Large Number of Elements");
const largeHeap = new MaxHeap();
for (let i = 1; i <= 100; i++) {
  largeHeap.add(i);
}
console.log(
  "Heap after adding 100 elements (first 10):",
  largeHeap.heap.slice(0, 11),
);
// Expected Heap[1]: 100 (largest element)
console.log("Heap size:", largeHeap.heap.length - 1); // Expected: 100

// Test 9: Sorting a Large Heap
console.log("\n9. Sorting a Large Heap");
const largeSortedArray = largeHeap.sort();
console.log(
  "First 10 elements of sorted array:",
  largeSortedArray.slice(0, 10),
);
// Expected: [100, 99, 98, 97, 96, 95, 94, 93, 92, 91]
console.log("Last 10 elements of sorted array:", largeSortedArray.slice(-10));
// Expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Test 10: Ensuring Heap Property After Each Operation
console.log("\n10. Ensuring Heap Property After Each Operation");
const propertyHeap = new MaxHeap();
const elementsToAdd = [20, 15, 30, 10, 5, 25, 35, 2, 7];
elementsToAdd.forEach((elem) => {
  propertyHeap.add(elem);
  // Verify heap property by ensuring each parent is >= its children
  let isValid = true;
  for (let i = 1; i < propertyHeap.heap.length; i++) {
    let left = 2 * i;
    let right = 2 * i + 1;
    if (
      left < propertyHeap.heap.length &&
      propertyHeap.heap[i] < propertyHeap.heap[left]
    ) {
      isValid = false;
      break;
    }
    if (
      right < propertyHeap.heap.length &&
      propertyHeap.heap[i] < propertyHeap.heap[right]
    ) {
      isValid = false;
      break;
    }
  }
  console.log(`Added ${elem}, Heap valid:`, isValid); // Expected: true for all additions
});
console.log("Final Heap:", propertyHeap.print());

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
      propertyHeap.heap[i] < propertyHeap.heap[left]
    ) {
      isValid = false;
      break;
    }
    if (
      right < propertyHeap.heap.length &&
      propertyHeap.heap[i] < propertyHeap.heap[right]
    ) {
      isValid = false;
      break;
    }
  }
  console.log(`Heap valid after removing ${removed}:`, isValid); // Expected: true for all removals
}
console.log("Heap after removing all elements:", propertyHeap.print());
// Expected Heap: [null]
