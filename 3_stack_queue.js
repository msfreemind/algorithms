class Node {
  constructor(node) {
    this.value = node.value;
    this.next = node.next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(node) {
    let newNode = new Node(node);

    if (!this.top) {
      this.top = this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }

    return ++this.length;
  }

  pop() {
    if (!this.top) return null;

    const node = this.top;

    if (this.top === this.bottom) this.top = this.bottom = null;
    else this.top = this.top.next;

    this.length--;

    return node;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node({ value: value });
    this.inStack.push(node);

    if (!this.front) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.front) return null;
    
    if (this.front === this.back) this.front = this.back = null;
    else this.front = this.front.next;

    this.length--;

    if (this.outStack.size() === 0) while (this.inStack.size() > 0) this.outStack.push(this.inStack.pop());
    
    return this.outStack.pop();
  }

  size() {
    return this.length;
  }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;