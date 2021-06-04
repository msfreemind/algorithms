class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const isBST = root => {
  if (!root || (!root.left && !root.right)) return true;
  if (root.left && root.left.value >= root.value) return false;
  if (root.right && root.right.value < root.value) return false;

  return isBST(root.left) && isBST(root.right);
};