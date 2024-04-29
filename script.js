const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];

  for (let num of arr) {
    if (currentSubarray.reduce((acc, val) => acc + val, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      result.push(currentSubarray);
      currentSubarray = [num];
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;
console.log(JSON.stringify(divide(arr, n)));