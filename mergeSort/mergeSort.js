var mergeSort = function (array) {
  if (array.length < 2) {
    return array;
  }
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

const array1 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array1)); // Expected Output: [3, 9, 10, 27, 38, 43, 82]

const array2 = [];
console.log(mergeSort(array2)); // Expected Output: []

const array3 = [1];
console.log(mergeSort(array3)); // Expected Output: [1]

const array4 = [5, 2, 3, 5, 2, 8];
console.log(mergeSort(array4)); // Expected Output: [2, 2, 3, 5, 5, 8]

const array5 = [-10, 20, 0, -30, 40];
console.log(mergeSort(array5)); // Expected Output: [-30, -10, 0, 20, 40]

const array6 = ["banana", "apple", "cherry"];
console.log(mergeSort(array6)); // Expected Output: ['apple', 'banana', 'cherry']

const array7 = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000),
);
console.log(mergeSort(array7)); // Expected Output: Sorted version of array7
