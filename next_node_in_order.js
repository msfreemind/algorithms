class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const nextNodeInOrder = node => {
  if (!node.left) {
    if (!node.right) {
      if (!node.parent) return null;
      if (node.parent.value <= node.value) return null;

      return node.parent;
    }

    return nextNodeInOrder(node.right);
  }

  let currNode = node;
  while (currNode.left) currNode = currNode.left;
  return currNode;
};