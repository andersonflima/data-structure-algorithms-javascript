# QuickSort Algorithm in JavaScript

This repository contains an implementation of the QuickSort algorithm in JavaScript, which is a popular sorting technique used in computer science. QuickSort is known for its efficiency in sorting arrays or lists of elements, making it a suitable choice for large datasets.

## What is QuickSort?

QuickSort is a highly efficient sorting algorithm that uses the divide-and-conquer strategy to sort elements. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The steps are then recursively applied to the sub-arrays until the whole list is sorted.

### Key Features of QuickSort

- **Divide and Conquer Approach**: Breaks the problem into smaller sub-problems and solves them independently.
- **Efficiency**: Generally performs well with an average time complexity of \(O(n \log n)\).
- **In-place Sorting**: Requires only a small additional amount of memory space.

## How QuickSort Works

1. **Pivot Selection**: Select a pivot element from the array. Different pivot selection methods can be used, such as picking the first element, the last element, or a random element.
2. **Partitioning**: Rearrange the array so that all elements with values less than the pivot come before it, while all elements with values greater than the pivot come after it.
3. **Recursively Apply**: Recursively apply the above steps to the sub-array of elements with smaller values and the sub-array of elements with greater values.
4. **Base Case**: Recursion ends when the sub-array has less than or equal to one element.

## Implementation

The implementation in `quickSort.js` provides a clear example of using the QuickSort algorithm to sort various types of arrays. Here is a brief overview of the function:

```javascript
function quickSort(arr) {
  if (arr.length < 2) return arr; // Base case: arrays with 0 or 1 element are already sorted

  let pivot = arr[0]; // Choosing the first element as the pivot
  let less = []; // Array to hold elements less than the pivot
  let greater = []; // Array to hold elements greater than the pivot

  // Partitioning step
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  // Recursive calls and concatenation to sort and merge the results
  return quickSort(less).concat(pivot, quickSort(greater));
}

let a = [10, 5, 2, 3];

console.log(quickSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple types of elements
let b = [34, 7, 23, 32, 5, 62];
console.log(quickSort(b)); // Output should be [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(quickSort(c)); // Output should be [-5, -3, -1, 1, 2]

// Case 4: An array that includes duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(quickSort(d)); // Output should be [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(quickSort(e)); // Output should be [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(quickSort(f)); // Output should be [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(quickSort(g)); // Output should be []

// Case 8: An array with a single element
let h = [1];
console.log(quickSort(h)); // Output should be [1]
```
