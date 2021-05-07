function linkedListIntersection(list1, list2) {
  let currNode1 = list1.head;
  let currNode2 = list2.head;
  let seenNodes = {};

  while (currNode1 || currNode2) {
    if (currNode2) {
      if (seenNodes.hasOwnProperty(currNode2.value)) return currNode2;
      seenNodes[currNode2.value] = true;
      currNode2 = currNode2.next;
    } 

    if (currNode1) {
      if (seenNodes.hasOwnProperty(currNode1.value)) return currNode1;
      seenNodes[currNode1.value] = true;
      currNode1 = currNode1.next
    }
  }

  return null;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
