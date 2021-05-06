class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.nextMax = null;
    this.nextMin = null;
  }
}

class MinMaxStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.max() || val > this.max().value) newNode.nextMax = newNode;
    else newNode.nextMax = this.max();

    if (!this.min() || val < this.min().value) newNode.nextMin = newNode;
    else newNode.nextMin = this.min();

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
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

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;

    return node;
  }

  size() {
    return this.length;
  }

  min() {
    if (!this.top) return null
    else return this.top.nextMin;
  }

  max() {
    if (!this.top) return null
    else return this.top.nextMax;
  }
}

exports.Node = Node;
exports.MinMaxStack = MinMaxStack;