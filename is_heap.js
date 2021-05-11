function isMaxHeap(array, idx=1) {
  if (array.length < 3) return true;

  for (let i = idx; i < array.length; i++) {
    let parent = array[i];
    let leftChild = array[i * 2] || -Infinity;
    let rightChild = array[(i * 2) + 1] || -Infinity;

    if (parent < leftChild || parent < rightChild) return false;
  }

  return true;
}


module.exports = {
  isMaxHeap
};