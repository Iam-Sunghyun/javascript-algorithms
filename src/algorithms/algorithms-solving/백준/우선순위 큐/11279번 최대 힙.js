// https://www.acmicpc.net/problem/11279
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(opers) {
  const maxHeap = new MaxHeap();
  const answer = [];
  for (const oper of opers) {
    if (oper === "0") {
      answer.push(maxHeap.delete());
    } else {
      maxHeap.insert(+oper);
    }
  }

  return answer.join("\n");
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(n) {
    this.heap.push(n);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (current > 1 && this.heap[current] > this.heap[parent]) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];

      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  delete() {
    if (this.heap.length === 1) return 0;
    [this.heap[1], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[1],
    ];
    const value = this.heap.pop();

    if (this.heap.length > 1) {
      this.heapify(1);
    }
    return value;
  }

  heapify(n) {
    const left = this.heap[n * 2];
    const right = this.heap[n * 2 + 1];
    let current = n;
    if (left !== undefined && left > this.heap[current]) {
      current = n * 2;
    }
    if (right !== undefined && right > this.heap[current]) {
      current = n * 2 + 1;
    }

    if (current !== n) {
      [this.heap[current], this.heap[n]] = [this.heap[n], this.heap[current]];
      this.heapify(current);
    }
  }
}

console.log(solution(input.slice(1)));
