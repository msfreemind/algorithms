class LRUCacheItem {
  constructor(key = null, val = null) {
    this.key = key;
    this.value = val;
  }
}

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.length = 0;
    this.itemNodes = new List();
    this.nodes = {};
  }

  size() {
    return this.length;
  }

  get(key) {
    const item = this.nodes[key];
    
    if (!item) return null;

    this.promote(item);
    return item.val.value;
  }

  set(key, val) {
    if (this.isFull()) this.prune();

    const item = new LRUCacheItem(key, val);
    this.nodes[key] = this.itemNodes.push(item);

    this.length++;
  }

  isFull() {
    return this.length === this.limit;
  }

  prune() {
    const item = this.itemNodes.shift();
    delete this.nodes[item.key];
    this.length--;
  }

  promote(item) {
    this.itemNodes.moveToEnd(item);
  }
}

// ----------------------------------------
// Given: Doubly Linked List - Do Not Edit!
// ----------------------------------------
class ListNode {
  constructor(val, prev = null, next = null) {
    this.prev = prev;
    this.val = val;
    this.next = next;
  }


  delete() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the head of the list.
  unshift(val) {
    if (this.head === null && this.tail === null) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.head = new ListNode(val, null, this.head);
      this.head.next.prev = this.head;
    }

    return this.head;
  }

  // Delete at the head of the list.
  shift() {
    if (this.head === null && this.tail === null) {
      return null;
    } else {
      let head = this.head;
      this.head = this.head.next;
      head.delete();
      return head.val;
    }
  }

  // Insert at the end of the list.
  push(val) {
    if (this.head === null && this.tail === null) {
      this.head = this.tail = new ListNode(val);
    } else {
      this.tail = new ListNode(val, this.tail, null);
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  // Delete at the end of the list.
  pop() {
    if (this.head === null && this.tail === null) {
      return null;
    } else {
      let tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.val;
    }
  }

  // Move a node to the front of the List
  moveToFront(node) {
    if (node === this.tail) {
      this.pop();
    } else if (node === this.head) {
      return;
    } else {
      node.delete();
    }

    node.prev = node.next = null;

    // Don't delegate to shift, since we want to keep the same
    // object.

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  // Move a node to the end of the List
  moveToEnd(node) {
    if (node === this.head) {
      this.shift();
    } else if (node === this.tail) {
      return;
    } else {
      node.delete();
    }

    // Don't delegate to push, since we want to keep the same
    // object.

    node.prev = null;
    node.next = null;

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}

exports.List = List;
exports.ListNode = ListNode;
exports.LRUCache = LRUCache;
exports.LRUCacheItem = LRUCacheItem;