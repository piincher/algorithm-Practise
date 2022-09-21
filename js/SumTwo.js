//brute force
// function sumTwo(arr, target) {
//

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

//optimal solution
function sumTwo(arr, target) {
  const track = {};

  for (let i = 0; i < arr.length; i++) {
    const sum = target - arr[i];
    if (track[sum] !== undefined) {
      return [track[sum], i];
    }
    track[arr[i]] = i;
  }
}

console.log(sumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10));
