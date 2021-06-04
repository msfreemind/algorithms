class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const arrayToBST = array => {
  if (!array || array.length === 0) return null;
  if (array.length === 1) return new Node(array[0]);

  const midPos = Math.floor(array.length / 2);
  const node = new Node(array[midPos]);

  node.left = arrayToBST(array.slice(0, midPos));
  node.right = arrayToBST(array.slice(midPos + 1));
  
  return node;
}