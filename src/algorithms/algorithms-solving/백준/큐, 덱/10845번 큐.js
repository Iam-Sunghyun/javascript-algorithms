// https://www.acmicpc.net/problem/10845
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(opers) {
  const queue = new Queue();
  const answer = [];

  for (const [oper, value] of opers) {
    switch (oper) {
      case "push":
        queue.push(value);
        break;
      case "pop":
        answer.push(queue.pop());
        break;
      case "size":
        answer.push(queue.size);
        break;
      case "empty":
        answer.push(queue.size === 0 ? 1 : 0);
        break;
      case "front":
        answer.push(queue.front());
        break;
      case "back":
        answer.push(queue.back());
        break;
    }
  }

  return answer.join("\n");
}

class Node {
  constructor(n) {
    this.front = null;
    this.back = null;
    this.value = n;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(n) {
    const node = new Node(n);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.back = node;
      node.front = this.tail;
      this.tail = node;
    }
    this.size += 1;
  }

  pop() {
    if (this.size === 0) return -1;

    const node = this.head;
    this.head = node.back;
    node.back = null;
    if (this.size === 1) {
      this.tail = null;
    }
    this.size = this.size === 0 ? 0 : this.size - 1;
    return node.value;
  }

  front() {
    return this.head?.value ?? -1;
  }
  back() {
    return this.tail?.value ?? -1;
  }
}

console.log(solution(input.slice(1)));
