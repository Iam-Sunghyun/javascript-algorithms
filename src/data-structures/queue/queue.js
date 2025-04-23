class Queue {
  #queue; // private 클래스 멤버
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}는 배열이 아닙니다.`);
    }
    this.#queue = array;
  }
  // 큐에 값을 추가하는 메서드
  enqueue(data) {
    this.#queue.push(data);
  }

  // 큐에서 값을 제거하는 메서드
  dequeue() {
    return this.#queue.shift();
  }

  // 큐가 비어있는지 확인하는 메서드
  isEmpty() {
    this.#queue.length ? true : false;
  }

  // 큐의 가장 앞에 있는 값을 확인하는 메서드
  peek() {
    return this.#queue[0];
  }

  // 큐의 모든 값을 출력하는 메서드
  entries() {
    return [...this.#queue];
  }

  // 큐의 크기를 확인하는 메서드
  size() {
    return this.#queue.length;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.entries());
console.log(q.dequeue());
console.log(q.entries());
