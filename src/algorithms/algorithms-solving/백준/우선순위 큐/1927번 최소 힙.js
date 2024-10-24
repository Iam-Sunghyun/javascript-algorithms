// https://www.acmicpc.net/problem/1927
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  const minHeap = new MinHeap();
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      if (minHeap.minHeap.length > 1) {
        const poped = minHeap.delete();
        answer.push(poped);
      } else {
        answer.push(0);
      }
    }
    if (numbers[i] !== 0) {
      minHeap.insert(numbers[i]);
    }
  }

  return answer.join("\n");
}

class MinHeap {
  constructor() {
    this.minHeap = [null];
  }

  swap(a, b) {
    [this.minHeap[a], this.minHeap[b]] = [this.minHeap[b], this.minHeap[a]];
  }

  insert(value) {
    this.minHeap.push(value);
    let current = this.minHeap.length - 1;
    let parent = Math.floor(current / 2);
    // 업힙
    while (current > 1 && this.minHeap[parent] > this.minHeap[current]) {
      if (this.minHeap[parent] > this.minHeap[current]) {
        this.swap(parent, current);
        current = parent;
      }
      parent = Math.floor(current / 2);
    }
  }

  delete() {
    if (this.minHeap.length === 1) return;
    const current = this.minHeap.length - 1;
    this.swap(1, current);
    const poped = this.minHeap.pop();

    if (this.minHeap.length > 1) {
      this.heapify(1);
    }

    return poped;
  }

  // 다운 힙
  heapify(i) {
    const left = this.minHeap[i * 2];
    const right = this.minHeap[i * 2 + 1];
    let current = i;
    if (left !== undefined && this.minHeap[current] > left) {
      current = i * 2;
    }
    if (right !== undefined && this.minHeap[current] > right) {
      current = i * 2 + 1;
    }

    if (current !== i) {
      this.swap(current, i);
      this.heapify(current);
    }
  }
}

console.log(solution(input.slice(1)));
