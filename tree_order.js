function inOrderArray(root) {
  if (!root) return [];

  let array = [];

  array = array.concat(inOrderArray(root.left));
  array.push(root.val);
  array = array.concat(inOrderArray(root.right));

  return array;
}

function postOrderArray(root) {
  if (!root) return [];

  let array = [];

  array = array.concat(postOrderArray(root.left));
  array = array.concat(postOrderArray(root.right));
  array.push(root.val);

  return array;
}

module.exports = {
  inOrderArray,
  postOrderArray
};