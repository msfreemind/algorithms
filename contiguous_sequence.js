const maxContiguousSequence = arr => {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) max = sum;
    else if (sum < 0) sum = 0;
  }

  return max;
};