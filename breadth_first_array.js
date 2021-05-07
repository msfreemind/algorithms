function breadthFirstArray(root) {
  let nodes = [];
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    nodes.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return nodes;
}

module.exports = {
  breadthFirstArray
};