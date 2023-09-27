/*

Filename: SophisticatedCode.js

Description: This code implements a complex sorting algorithm called Quicksort. It sorts an array of integers in ascending order using a recursive divide-and-conquer approach.

*/

function quicksort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
let array = [7, 5, 2, 9, 1, 3];
quicksort(array, 0, array.length - 1);

console.log("Sorted array: " + array.join(", "));

// Output: Sorted array: 1, 2, 3, 5, 7, 9