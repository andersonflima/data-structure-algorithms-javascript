# Bubble Sort Algorithm in JavaScript

This repository contains an implementation of the Bubble Sort algorithm in JavaScript, one of the simplest sorting algorithms. Bubble Sort is easy to understand and implement, making it a great starting point for learning sorting algorithms.

## What is Bubble Sort?

Bubble Sort is a straightforward sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

### Key Features of Bubble Sort

- **Simple to Implement**: Easy to code and understand.
- **Stable Sorting**: Maintains the relative order of records with equal keys.
- **Inefficient for Large Datasets**: Has a time complexity of \(O(n^2)\), which makes it impractical for large arrays.

## How Bubble Sort Works

1. **Outer Loop**: Repeatedly iterate through the array.
2. **Inner Loop**: Compare adjacent elements and swap them if necessary.
3. **Largest Element to the End**: Each iteration places the next largest element in its correct position at the end of the array.
4. **Repeat**: Continue this process for the remaining unsorted elements.

## Implementation

The implementation in `bubbleSort.js` demonstrates how the algorithm works for various types of arrays. Below is the code:

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }
  return arr;
}

// Case 1: A standard unsorted array
let a = [10, 5, 2, 3];
console.log(bubbleSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple elements
let b = [34, 7, 23, 32, 5, 62];
console.log(bubbleSort(b)); // [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(bubbleSort(c)); // [-5, -3, -1, 1, 2]

// Case 4: An array with duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(bubbleSort(d)); // [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(bubbleSort(e)); // [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(bubbleSort(f)); // [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(bubbleSort(g)); // []

// Case 8: An array with a single element
let h = [1];
console.log(bubbleSort(h)); // [1]
```
