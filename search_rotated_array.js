const searchRotatedArray = (arr, num) => {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0] === num ? 0 : null;

  let low = 0;
  let high = arr.length - 1;

  if (arr[high] < arr[low]) low = indexOfSmallest(arr, low, high, high);

  const result = binaryArraySearch(arr.slice(low).concat(arr.slice(0, low)), 0, high, num);

  if (result + low < arr.length) return result + low;
  return low - (arr.length - result);
};

const indexOfSmallest = (arr, low, high, index) => {
  if (high - low <= 0) {
    if (arr[low] === arr[index]) return low < index ? low : index;
    return arr[low] < arr[index] ? low : index;
  }

  let mid = Math.floor(low + ((high - low) / 2));

  if (arr[mid] < arr[index]) return indexOfSmallest(arr, low, mid - 1, mid);
  if (arr[mid] > arr[index]) return indexOfSmallest(arr, mid + 1, high, index);

  const index1 = indexOfSmallest(arr, low, mid, index);
  const index2 = indexOfSmallest(arr, mid + 1, high, index)

  return index1 === index ? (index2 === index ? index : index2) : index1;
};

const binaryArraySearch = (arr, low, high, num) => {
  let mid = Math.floor(low + ((high - low) / 2));

  if (arr[mid] > num) return binaryArraySearch(arr, 0, mid - 1, num);
  if (arr[mid] < num) return binaryArraySearch(arr, mid + 1, high, num);

  return mid;
}