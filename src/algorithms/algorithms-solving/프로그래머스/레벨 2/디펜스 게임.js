// https://school.programmers.co.kr/learn/courses/30/lessons/142085#
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(n) {
    this.heap.push(n);
    this.upHeap();
  }
  delete() {
    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];
    const poped = this.heap.pop();
    this.downHeap();

    return poped;
  }
  upHeap() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      } else {
        break;
      }
    }
  }
  downHeap() {
    let current = 0;
    while (true) {
      let i = current;
      let [left, right] = [i * 2 + 1, i * 2 + 2];

      if (this.heap[current] < this.heap[left]) {
        current = left;
      }
      if (this.heap[current] < this.heap[right]) {
        current = right;
      }
      if (i === current) break;
      [this.heap[current], this.heap[i]] = [this.heap[i], this.heap[current]];
    }
  }
}

function solution(n, k, enemy) {
  const maxHeap = new MaxHeap();
  let count = 0;

  for (let i = 0; i < enemy.length; i++) {
    count += enemy[i];
    maxHeap.insert(enemy[i]);
    if (count > n) {
      if (k > 0) {
        count -= maxHeap.delete();
        k--;
      } else {
        return i;
      }
    }
  }
  return enemy.length;
}
