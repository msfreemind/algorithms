const tarjan = nodeList => {
  let result = [];
  let visited = {};

  nodeList.forEach(node => visit(result, visited, node));

  return result;
}

const visit = (result, visited, node) => {
  if (!visited[node.val]) {
    node.neighbors.forEach(neighbor => visit(result, visited, neighbor));
    visited[node.val] = true;
    result.unshift(node.val);
  }
}