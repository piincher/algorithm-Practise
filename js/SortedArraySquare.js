const sortedSquare = (arr) => {
  // initialise empty
  let results = [];

  //keep track of left pointer
  let left = 0;

  //right pointer
  let n = arr.length;
  let right = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(arr[right]) > Math.abs(arr[left])) {
      results[i] = arr[right] * arr[right];
      right--;
    } else {
      results[i] = arr[left] * arr[left];
      left++;
    }
  }

  return results;
};
console.log(sortedSquare([-6, -3, -1, 2, 4, 5]));
