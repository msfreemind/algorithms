function breadthFirstSearch(startingNode, targetVal) {
  let queue = [startingNode];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    visited.add(node);
    if (node.val === targetVal) return node;

    node.neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) queue.push(neighbor);
    });
  }

  return null;
}

module.exports = {
  breadthFirstSearch
};