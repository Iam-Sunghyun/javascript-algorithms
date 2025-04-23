// 정렬된 연결리스트 우선순위 큐
class Node {
  constructor(priority, data, next = null) {
    this.priority = priority;
    this.data = data;
    this.next = next;
  }
}

class PriorityQueue4 {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 큐에 값을 추가하는 메서드
  // 적절한 우선순위 위치에 노드를 삽입한다
  enqueue(priority = 0, data) {
    let current = this.head;
    let prevNode = null;
    while (current) {
      if (current.priority <= priority) {
        prevNode = current;
        current = current.next;
      } else break;
    }
    // 우선순위가 가장 높은 노드가 맨 앞인 경우
    if (!prevNode) {
      const node = new Node(priority, data, this.head);
      this.head = node;
      // 우선순위가 가장 높은 노드가 맨 앞이 아닌 경우
    } else {
      const node = new Node(priority, data, prevNode.next);
      prevNode.next = node;
    }
    this.size++;
  }

  // 우선순위가 가장 높은 노드(priority 낮은 값)를 제거하는 메서드
  dequeue() {
    if (this.isEmpty()) {
      console.log("큐가 비어있습니다.");
      return;
    }
    const dequeueNode = this.head;
    this.head = dequeueNode.next;
    dequeueNode.next = null;
    this.size--;
    return dequeueNode;
  }

  isEmpty() {
    return this.size ? false : true;
  }

  printQueue() {
    let head = this.head;
    while (head) {
      console.log(`${head.priority}: ${head.data}`);
      head = head.next;
    }
  }
}

let q = new PriorityQueue4();

q.enqueue(5, "first");
q.enqueue(1, "second");
q.enqueue(2, "third");
q.enqueue(3, "forth");
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
