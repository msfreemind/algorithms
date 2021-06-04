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

class SetOfStacks {
  constructor(stackCapacity=20) {
    this.top = null;
    this.bottom = null;

    this.stacks = [];
    this.stackNumber = null;

    this.length = 0;
    this.stackCapacity = stackCapacity;
  }

  push(node) {
    if (!this.top) {
      this.stacks.push(new Stack());
      this.stackNumber = 0;
    } else if (this.stacks[this.stackNumber].size() >= this.stackCapacity) {
      this.stacks[++this.stackNumber] = new Stack();
    }

    const currStack = this.stacks[this.stackNumber];

    currStack.push(node);
    this.top = currStack.top;

    if (!this.bottom) this.bottom = this.top;
    
    return ++this.length;
  }

  pop() {
    if (!this.top) return;

    const currStack = this.stacks[this.stackNumber];
    const node = currStack.pop();

    if (currStack.size() > 0) this.top = currStack.top;
    else if (this.stackNumber > 0) this.top = this.stacks[--this.stackNumber].top;
    else this.top = this.bottom = null;

    this.length--;

    return node;
  }
}