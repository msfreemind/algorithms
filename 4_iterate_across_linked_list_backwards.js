function iterateAcrossLinkedListBackwards(linkedList) {
  let nodeStack = [];
  let listValues = "";
  let currNode = linkedList.head;

  while (currNode) {
    nodeStack.push(currNode.value);
    currNode = currNode.next;
  }

  while (nodeStack.length > 0) {
    if (listValues !== "") listValues += " -> ";
    listValues += String(nodeStack.pop());
  }

  return listValues;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;