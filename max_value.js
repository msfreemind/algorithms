function maxValue(node, visited=new Set()) {
  let max = node.val;
  
  visited.add(node);

  node.neighbors.forEach(neighbor => {
    if (!visited.has(neighbor)) {
      let tempMax = maxValue(neighbor, visited);
      if (tempMax > max) max = tempMax;
    }
  })

  return max;
}

module.exports = {
  maxValue
};