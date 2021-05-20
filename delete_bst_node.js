var deleteNode = function(root, key) {
  let prevNode, node = root;
  
  while (node) {
    if (key < node.val) {
      prevNode = node;
      node = node.left;
    } else if (key > node.val) {
      prevNode = node;
      node = node.right;
    } else {
      if (node.left && node.right) {
        let traversalNode = node.right;
        
        while (traversalNode.left) traversalNode = traversalNode.left;
        
        traversalNode.left = node.left;
        node.left = null;
      }      
      
      if (prevNode) {
        if (node.val < prevNode.val) prevNode.left = node.right || node.left;
        else prevNode.right = node.right || node.left;
      } else {
        node = node.right || node.left;
      }    
      
      break;
    }
  }
  
  if (prevNode) return root;
  else return node;
};