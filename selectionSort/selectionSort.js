function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smalletsIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smalletsIndex]) {
        [arr[j], arr[smalletsIndex]] = [arr[smalletsIndex], arr[j]];
      }
    }
    [arr[i], arr[smalletsIndex]] = [arr[smalletsIndex], arr[i]];
  }
  return arr;
}

let a = [10, 5, 2, 3];

console.log(selectionSort(a)); // [2, 3, 5, 10]

// Case 2: An array with multiple types of elements
let b = [34, 7, 23, 32, 5, 62];
console.log(selectionSort(b)); // Output should be [5, 7, 23, 32, 34, 62]

// Case 3: An array with negative and positive numbers
let c = [-3, -1, 2, 1, -5];
console.log(selectionSort(c)); // Output should be [-5, -3, -1, 1, 2]

// Case 4: An arraylthat includes duplicate elements
let d = [4, 1, 3, 4, 2, 3];
console.log(selectionSort(d)); // Output should be [1, 2, 3, 3, 4, 4]

// Case 5: An already sorted array
let e = [1, 2, 3, 4, 5];
console.log(selectionSort(e)); // Output should be [1, 2, 3, 4, 5]

// Case 6: A reverse sorted array
let f = [5, 4, 3, 2, 1];
console.log(selectionSort(f)); // Output should be [1, 2, 3, 4, 5]

// Case 7: An empty array
let g = [];
console.log(selectionSort(g)); // Output should be []

// Case 8: An array with a single element
let h = [1];
console.log(selectionSort(h)); // Output should be [1]
