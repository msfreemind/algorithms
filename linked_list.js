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
    
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;

    this.length++;

    return this;
  }

  removeTail() {
    if (!this.tail) return;

    const removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let curr = this.head;

      while (curr.next !== this.tail) curr = curr.next;

      this.tail = curr;
      this.tail.next = null;
    }

    this.length--;

    return removedTail;
  }

  addToHead(val) {
    const node = new Node(val);

    if (this.head) node.next = this.head;
    else this.tail = node;

    this.head = node;

    this.length++;

    return this;
  }

  removeHead() {
    if (!this.head) return;

    const removedHead = this.head;

    if (this.head === this.tail) this.head = this.tail = null;
    else this.head = this.head.next;

    this.length--;

    return removedHead;
  }

  contains(target) {
    if (!this.head) return false;

    let curr = this.head;

    while (curr) {
      if (curr.value === target) return true;
      curr = curr.next;
    }

    return false;
  }

  get(index) {
    if (index >= this.length) return null;

    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;

    return node;
  }

  set(index, val) {
    if (index >= this.length) return false;

    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;

    node.value = val;
    return true;
  }

  insert(index, val) {
    if (index >= this.length) return false;

    const newNode = new Node(val);

    let prevNode = null;
    let nextNode = this.head;

    for (let i = 0; i < index; i++) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    } 
    
    if (prevNode) prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index >= this.length) return;
    
    if (index === 0) {
      this.removeHead();
      return true;
    } else if (index === this.length - 1) {
      this.removeTail();
      return true;
    }

    let prevNode = null;
    let node = this.head;

    for (let i = 0; i < index; i++) {
      prevNode = node;
      node = node.next;
    } 
    
    prevNode.next = node.next;

    this.length--;

    return node;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;