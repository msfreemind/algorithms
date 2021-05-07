function depthFirstSearch(root, targetVal) {
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();

    if (node.val === targetVal) return node;

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return null;
}

module.exports = {
  depthFirstSearch
}; 