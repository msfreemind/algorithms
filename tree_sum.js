const { breadthFirstArray } = require('./breadth_first_array');

function treeSum(root) {
  if (!root) return 0;
  return breadthFirstArray(root).reduce((acc, curr) => acc + curr);
}

module.exports = {
  treeSum
};