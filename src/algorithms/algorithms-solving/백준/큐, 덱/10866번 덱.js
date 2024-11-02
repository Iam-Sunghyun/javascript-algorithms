// https://www.acmicpc.net/problem/10866
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(opers) {
  const deque = new Deque();
  const answer = [];
  for (const [oper, val] of opers) {
    if (oper === "push_front") {
      deque.pushFront(+val);
    }
    if (oper === "push_back") {
      deque.pushBack(+val);
    }
    if (oper === "front") {
      answer.push(deque.head?.value ?? -1);
    }
    if (oper === "back") {
      answer.push(deque.tail?.value ?? -1);
    }
    if (oper === "pop_front") {
      answer.push(deque.popFront());
    }
    if (oper === "pop_back") {
      answer.push(deque.popBack());
    }
    if (oper === "size") {
      answer.push(deque.size);
    }
    if (oper === "empty") {
      answer.push(deque.size === 0 ? 1 : 0);
    }
  }

  return answer.join("\n");
  // return deque.values()
}

class Node {
  constructor(n) {
    this.front = undefined;
    this.back = undefined;
    this.value = n;
  }
}

class Deque {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
  }

  pushFront(n) {
    const node = new Node(n);
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.front = node;
      node.back = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  pushBack(n) {
    const node = new Node(n);
    if (this.tail === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      node.front = this.tail;
      this.tail.back = node;
      this.tail = node;
    }
    this.size += 1;
  }

  popFront() {
    const node = this.head;
    if (this.size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else if (node !== undefined && this.size > 1) {
      this.head = node.back;
      this.head.front = undefined;
    }
    this.size = this.size - 1 < 0 ? 0 : this.size - 1;
    return node ? node.value : -1;
  }

  popBack() {
    const node = this.tail;
    if (this.size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else if (node !== undefined && this.size > 1) {
      this.tail = node.front;
      this.tail.back = undefined;
    }
    this.size = this.size - 1 < 0 ? 0 : this.size - 1;
    return node ? node.value : -1;
  }

  values() {
    const values = [];
    let node = this.head;
    while (node !== undefined) {
      values.push(node.value);
      node = node.back;
    }
    return values;
  }
}

console.log(solution(input.slice(1)));
