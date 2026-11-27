function twoSum(arr, target) {
  let left = 0
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]