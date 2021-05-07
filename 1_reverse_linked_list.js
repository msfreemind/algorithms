function reverseLinkedList(linkedList) {
  let prev = null;
  let curr = linkedList.tail = linkedList.head;

  while (curr) {
    const next = curr.next

    curr.next = prev;
    prev = curr;

    curr = next;
  }

  linkedList.head = prev;
  return linkedList;
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
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;