# Insertion Sort Algorithm in JavaScript

This repository contains an implementation of the Insertion Sort algorithm in JavaScript, which is a straightforward and effective sorting technique. Insertion Sort is particularly useful for small datasets and nearly sorted arrays due to its simplicity and minimal overhead.

## What is Insertion Sort?

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much like the way you might sort playing cards in your hands: each new card is inserted into its correct position relative to the already sorted cards.

### Key Features of Insertion Sort

- **Step-by-step Sorting**: Processes one element at a time and places it in the correct position.
- **In-place Sorting**: Does not require additional memory for another array.
- **Best for Small or Nearly Sorted Data**: Performs well when the array is already or nearly sorted.

## How Insertion Sort Works

1. **Traverse the Array**: Start from the second element and iterate through the array.
2. **Current Element**: Compare the current element with the elements in the sorted portion of the array.
3. **Shift Elements**: Shift larger elements one position to the right to make space for the current element.
4. **Insert Element**: Place the current element in its correct position.
5. **Repeat**: Continue this process until the entire array is sorted.

## Implementation

The implementation in `insertionSort.js` demonstrates the Insertion Sort algorithm for various types of arrays. Here is an overview of the function:

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Case 1: A standard unsorted array
let a = [10, 5, 2, 3];
console.log(insertionSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple elements
let b = [34, 7, 23, 32, 5, 62];
console.log(insertionSort(b)); // [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(insertionSort(c)); // [-5, -3, -1, 1, 2]

// Case 4: An array with duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(insertionSort(d)); // [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(insertionSort(e)); // [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(insertionSort(f)); // [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(insertionSort(g)); // []

// Case 8: An array with a single element
let h = [1];
console.log(insertionSort(h)); // [1]
```
