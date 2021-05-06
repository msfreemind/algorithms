class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      const temp = this.top;
      this.top = node;
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

    return node.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;