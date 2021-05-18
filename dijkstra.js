const dijkstra = graph => {
  let distances = {};
  let parent = {};
  let nodeList = new Set();
  
  Object.keys(graph).forEach(key => {
    nodeList.add(key);
    distances[key] = Infinity;
    parent[key] = null;
  });

  distances['a'] = 0;

  while (nodeList.size > 0) {
    let nodeKey = getSmallestNode(nodeList, distances);
    nodeList.delete(nodeKey);

    let currentNode = graph[nodeKey];

    currentNode.forEach(neighbor => {
      if (nodeList.has(neighbor.node)) {
        let newDistance = distances[nodeKey] + neighbor.dist;

        if (newDistance < distances[neighbor.node]) {
          distances[neighbor.node] = newDistance;
          parent[neighbor.node] = nodeKey;
        }
      }
    });
  }

  return parent;
}

const getSmallestNode = (nodeList, distances) => {
  let smallestNode = null;
  let smallestDistance = Infinity;

  nodeList.forEach(node => {
    if (distances[node] < smallestDistance) {
      smallestNode = node;
      smallestDistance = distances[node];
    }
  });

  return smallestNode;
}