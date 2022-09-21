function ArrayOfProduct(arr) {
  let leftProductIndex = 1;
  let rightProductIndex = 1;
  const results = Array(length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    results[i] = leftProductIndex;
    leftProductIndex = leftProductIndex * arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    results[i] *= rightProductIndex;

    rightProductIndex = rightProductIndex * arr[i];
  }

  return results;
}

console.log(ArrayOfProduct([5, 1, 4, 2]));
