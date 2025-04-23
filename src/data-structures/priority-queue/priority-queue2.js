// 정렬된 배열 우선순위 큐
class PriorityQueue2 {
  constructor() {
    this.queue = [];
  }

  // 큐에 값 추가하는 메서드 -> 정렬된 상태를 유지한다
  enqueue(priority = 0, data) {
    if (this.isEmpty()) {
      this.queue.push([priority, data]);
      return;
    }
    let insertIndex;
    for (let i = this.queue.length - 1; i >= 0; i--) {
      if (this.queue[i][0] < priority) {
        insertIndex = i + 1;
        break;
      }
    }
    this.queue.splice(insertIndex, 0, [priority, data]);
  }

  // 우선순위가 가장 높은 값을 제거하는 메서드
  // 가장 앞에 있는 요소를 제거한다
  dequeue() {
    if (this.isEmpty()) {
      console.log("큐가 비어있습니다.");
      return;
    }
    return this.queue.shift();
  }

  // 큐가 비었는지 확인하는 메서드
  isEmpty() {
    if (!this.queue.length) return true;
  }
}

let q = new PriorityQueue2();
q.dequeue();
q.enqueue(4, "forth!");
q.enqueue(2, "second");
q.enqueue(3, "third");
console.log(q.queue);

q.enqueue(1, "first!");
q.enqueue(0, "zero!");
console.log(q.queue);

console.log(q.dequeue());
console.log(q.queue);
