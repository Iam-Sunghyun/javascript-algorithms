// 정렬되지 않은 배열 우선순위 큐
class PriorityQueue1 {
  constructor() {
    this.queue = [];
  }

  // 큐에 값 추가하는 메서드
  enqueue(priority = 0, data) {
    this.queue.push([priority, data]);
  }

  // 우선순위가 가장 높은 값을 제거하는 메서드
  // 모든 값을 순회하며 우선순위가 가장 높은 요소를 찾는다
  dequeue() {
    if (this.isEmpty()) {
      console.log("큐가 비어있습니다.");
      return;
    }
    let first = this.queue[0][0];
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i][0] < first) {
        first = i;
      }
    }
    const dequeueValue = this.queue.splice(first, 1);
    return dequeueValue;
  }

  // 큐가 비어있는지 확인하는 메서드
  isEmpty() {
    return this.queue.length ? false : true;
  }
}

let q = new PriorityQueue1();

q.enqueue(2, "second");
q.enqueue(3, "third");
q.enqueue(4, "forth!");
console.log(q.queue);
q.enqueue(1, "first!");
console.log(q.queue);

console.log(q.dequeue());
console.log(q.queue);
console.log(q.isEmpty());
