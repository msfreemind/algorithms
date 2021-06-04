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

  removeHead() {
    if (!this.head) return;

    const removedHead = this.head;

    if (this.head === this.tail) this.head = this.tail = null;
    else this.head = this.head.next;

    this.length--;

    return removedHead;
  }

  remove(index) {
    if (index >= this.length) return;
    
    if (index === 0) return this.removeHead();

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

class AnimalShelter {
  constructor() {
    this.animalQueue = new LinkedList();
  }

  enqueue(animal) {
    this.animalQueue.addToTail(animal);
    return this.animalQueue;
  }

  dequeueAny() {
    return this.animalQueue.removeHead();
  }

  dequeueDog() {
    if (!this.animalQueue.head) return;

    let currAnimal = this.animalQueue.head;
    let idx = 0;

    while (currAnimal) {
      if (currAnimal.value === "dog") return this.animalQueue.remove(idx);

      currAnimal = currAnimal.next;
      idx++;
    }
  }

  dequeueCat() {
    if (!this.animalQueue.head) return;

    let currAnimal = this.animalQueue.head;
    let idx = 0;

    while (currAnimal) {
      if (currAnimal.value === "cat") return this.animalQueue.remove(idx);

      currAnimal = currAnimal.next;
      idx++;
    }
  }
}