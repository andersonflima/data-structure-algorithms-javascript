function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let a = [10, 5, 2, 3];

console.log(bubbleSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple types of elements
let b = [34, 7, 23, 32, 5, 62];
console.log(bubbleSort(b)); // Output should be [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(bubbleSort(c)); // Output should be [-5, -3, -1, 1, 2]

// Case 4: An arraylthat includes duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(bubbleSort(d)); // Output should be [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(bubbleSort(e)); // Output should be [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(bubbleSort(f)); // Output should be [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(bubbleSort(g)); // Output should be []

// Case 8: An array with a single element
let h = [1];
console.log(bubbleSort(h)); // Output should be [1]
