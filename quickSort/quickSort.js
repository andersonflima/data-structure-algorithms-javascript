function quickSort(arr) {
  if (arr.length < 2) return arr;

  var pivot = arr[0];
  let less = new Array();
  let greater = new Array();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

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

// Case 4: An arraylthat includes duplicate elements
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
