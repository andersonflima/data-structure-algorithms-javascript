# Partition Function in JavaScript

This repository contains an implementation of the `partition` function in JavaScript. The partitioning logic is widely used in algorithms like QuickSort to divide an array into two parts based on a pivot value. This implementation demonstrates an efficient and simple way to rearrange elements in-place.

## What is Partition?

The `partition` function rearranges elements in an array based on a pivot element. Elements smaller than the pivot are moved to its left, and elements larger than the pivot are moved to its right. The pivot is then placed in its correct position in the sorted array.

### Key Features of Partition

- **Pivot-Based Rearrangement**: Divides the array into two parts based on the pivot.
- **In-Place Operation**: Rearranges elements directly within the original array.
- **Foundation for QuickSort**: The partition step is a critical component of the QuickSort algorithm.

## How Partition Works

1. **Choose a Pivot**: The last element in the array is selected as the pivot.
2. **Compare and Swap**: Iterate through the array, moving elements smaller than the pivot to the left.
3. **Place Pivot**: Swap the pivot with the first element greater than the pivot, positioning it correctly.
4. **Return Modified Array**: The array is partitioned with smaller elements on the left and larger elements on the right.

## Implementation

The `partition.js` implementation is written to operate on any array and rearranges its elements based on the pivot value. Below is the code:

```javascript
function partition(arr) {
  let pivot = arr[arr.length - 1]; // Last element as the pivot
  let l = 0; // Pointer for the smaller element

  // Partitioning the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap elements
      l++;
    }
  }

  // Place the pivot in its correct position
  [arr[l], arr[arr.length - 1]] = [arr[arr.length - 1], arr[l]];

  // Log intermediate states for debugging
  console.log(arr);

  return arr; // Return the partitioned array
}

// Example Usage:

// Example array
var arr = [1, 7, 4, 40, 21, 90, 6, 10, 8, 12];

console.log(partition(arr));

// Example 1: Array with mixed positive and negative numbers
var arr1 = [3, -2, 5, -8, 1, 0, -1];
console.log(partition(arr1));
// Output: Partitioned array with smaller elements on the left, e.g., [-2, -8, -1, 0, 1, 5, 3]

// Example 2: Array with duplicate elements
var arr2 = [4, 1, 3, 4, 2, 4];
console.log(partition(arr2));
// Output: Partitioned array, e.g., [1, 3, 2, 4, 4, 4]

// Example 3: Already sorted array
var arr3 = [1, 2, 3, 4, 5, 6];
console.log(partition(arr3));
// Output: Partitioned array remains the same, e.g., [1, 2, 3, 4, 5, 6]

// Example 4: Reverse sorted array
var arr4 = [6, 5, 4, 3, 2, 1];
console.log(partition(arr4));
// Output: Partitioned array, e.g., [1, 2, 4, 3, 5, 6]

// Example 5: Array with a single element
var arr5 = [42];
console.log(partition(arr5));
// Output: [42] (unchanged as it has only one element)

// Example 6: Empty array
var arr6 = [];
console.log(partition(arr6));
// Output: [] (unchanged as it is empty)

// Example 7: Large array with random numbers
var arr7 = [20, 15, 30, 10, 50, 5, 25];
console.log(partition(arr7));
// Output: Partitioned array, e.g., [15, 10, 5, 20, 50, 30, 25]

// Example 8: Array with all identical elements
var arr8 = [7, 7, 7, 7, 7];
console.log(partition(arr8));
// Output: [7, 7, 7, 7, 7] (unchanged as all elements are identical)

// Example 9: Array with floating point numbers
var arr9 = [3.1, 2.4, 5.6, 1.2, 4.3];
console.log(partition(arr9));
// Output: Partitioned array, e.g., [2.4, 1.2, 3.1, 5.6, 4.3]
```
