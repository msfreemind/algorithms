class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return (idx * 2) + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    const parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [ this.array[idx], this.array[parentIdx] ] = [ this.array[parentIdx], this.array[idx] ];
      this.siftUp(parentIdx);
    } 
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    if (idx === this.array.length - 1) return;

    const leftChildIdx = this.getLeftChild(idx);
    const rightChildIdx = this.getRightChild(idx);

    const leftVal = this.array[leftChildIdx] || -Infinity;
    const rightVal = this.array[rightChildIdx] || -Infinity;

    if (leftVal > this.array[idx] || rightVal > this.array[idx]) {
      if (leftVal > rightVal) {
        [ this.array[idx], this.array[leftChildIdx] ] = [ this.array[leftChildIdx], this.array[idx] ];
        this.siftDown(leftChildIdx);
      } else {
        [ this.array[idx], this.array[rightChildIdx] ] = [ this.array[rightChildIdx], this.array[idx] ];
        this.siftDown(rightChildIdx);
      }
    }
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    const max = this.array[1];
    
    this.array[1] = this.array.pop();
    this.siftDown(1);

    return max;
  }
}

module.exports = {
  MaxHeap
};