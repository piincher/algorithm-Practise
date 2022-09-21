function isAvalidSubsquent(arr1, subsquent) {
  let index = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === subsquent[index]) {
      index++;
    }
  }
  return index === subsquent.length;
}

console.log(isAvalidSubsquent([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
