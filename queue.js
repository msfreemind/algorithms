class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);

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

    const node = this.front;

    if (this.front === this.back) this.front = this.back = null;
    else this.front = this.front.next;

    this.length--;

    return node.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;