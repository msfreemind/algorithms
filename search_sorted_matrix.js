const searchSortedMatrix = (matrix, target) => {
  if (matrix.length === 0) return null;
  if (matrix[0][0] > target) return null;

  let queue = [{ val: matrix[0][0], row: 0, col: 0 }];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    visited.add(String(`${node.row},${node.col}`));

    if (node.val === target) return [node.row, node.col];

    if (node.row + 1 < matrix.length) {
      let down = matrix[node.row + 1][node.col];

      if (down <= target) {
        if (!visited.has(String(`${node.row + 1},${node.col}`))) {
          queue.push({ val: down, row: node.row + 1, col: node.col });
        }
      }  
    }

    if (node.col + 1 < matrix[0].length) {
      let right = matrix[node.row][node.col + 1];

      if (right <= target) {
        if (!visited.has(String(`${node.row},${node.col + 1}`))) {
          queue.push({ val: right, row: node.row, col: node.col + 1 });
        }
      } 
    }
  } 

  return null;
};