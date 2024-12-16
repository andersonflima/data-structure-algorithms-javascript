# Selection Sort Algorithm in JavaScript

This repository contains an implementation of the Selection Sort algorithm in JavaScript, a simple and efficient sorting technique for small datasets. Selection Sort is widely used in teaching and learning sorting algorithms due to its straightforward approach.

## What is Selection Sort?

Selection Sort is a sorting algorithm that divides the input array into two parts: the sorted portion and the unsorted portion. It repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the leftmost unsorted element, effectively growing the sorted portion one element at a time.

### Key Features of Selection Sort

- **Simple to Implement**: Easy to understand and code.
- **In-place Sorting**: Does not require additional memory for another array.
- **Inefficient for Large Datasets**: Its \(O(n^2)\) time complexity makes it suitable only for small datasets.

## How Selection Sort Works

1. **Find the Smallest Element**: Iterate through the unsorted portion of the array to find the smallest element.
2. **Swap**: Swap the smallest element with the leftmost unsorted element.
3. **Repeat**: Move the boundary between the sorted and unsorted portions of the array and repeat the process until the entire array is sorted.

## Implementation

The implementation in `selectionSort.js` demonstrates how the algorithm works with various types of arrays. Below is the code:

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        [arr[j], arr[smallestIndex]] = [arr[smallestIndex], arr[j]]; // Swap
      }
    }
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]; // Place the smallest element
  }
  return arr;
}

// Case 1: A standard unsorted array
let a = [10, 5, 2, 3];
console.log(selectionSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple elements
let b = [34, 7, 23, 32, 5, 62];
console.log(selectionSort(b)); // [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(selectionSort(c)); // [-5, -3, -1, 1, 2]

// Case 4: An array that includes duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(selectionSort(d)); // [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(selectionSort(e)); // [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(selectionSort(f)); // [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(selectionSort(g)); // []

// Case 8: An array with a single element
let h = [1];
console.log(selectionSort(h)); // [1]
```
