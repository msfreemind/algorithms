const allUniq = str => {
  let seenChars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (seenChars.has(str.charAt(i))) return false;
    seenChars.add(str.charAt(i));
  }

  return true;
};

const zeroMatrix = matrix => {
  let zeroes = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) zeroes.push([row, col]);
    }
  }

  zeroes.forEach(pos => zeroOut(matrix, pos[0], pos[1]));

  return matrix;
};

const zeroOut = (matrix, row, col) => {
  for (let currCol = 0; currCol < matrix[row].length; currCol++) {
    matrix[row][currCol] = 0;
  }

  for (let currRow = 0; currRow < matrix.length; currRow++) {
    matrix[currRow][col] = 0;
  }
};

const removeDups = linkedList => {
  if (!linkedList || linkedList.head === linkedList.tail) return linkedList;

  let vals = new Set();
  let idx = 0;
  let node = linkedList.head;

  while (node) {
    if (vals.has(node.value)) linkedList.remove(idx);
    else vals.add(node.value);

    node = node.next;
    idx++;
  }

  return linkedList;
}