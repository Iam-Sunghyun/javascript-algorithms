// 정렬 안 된 연결 리스트 우선순위 큐
class Node {
  constructor(priority, data, next = null) {
    this.priority = priority;
    this.data = data;
    this.next = next;
  }
}

class PriorityQueue3 {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 큐에 값을 추가하는 메서드
  enqueue(priority = 0, data) {
    const node = new Node(priority, data, this.head);
    this.head = node;
    this.size++;
  }

  // 우선순위가 가장 높은 노드(priority 낮은 값)를 제거하는 메서드
  // 모든 값을 순회하며 우선순위가 가장 높은 요소를 찾는다
  dequeue() {
    if (this.isEmpty()) {
      console.log("큐가 비어있습니다.");
      return;
    }
    let dequeueNode = this.head;
    let node = this.head;
    let prevNode = null;
    while (node.next) {
      if (dequeueNode.priority > node.next.priority) {
        dequeueNode = node.next;
        prevNode = node;
      }
      node = node.next;
    }

    // 우선순위가 가장 높은 노드가 맨 앞이 아닌 경우
    if (prevNode) {
      prevNode.next = dequeueNode.next;
    }
    // 우선순위가 가장 높은 노드가 맨 앞인 경우
    if (this.head === dequeueNode) {
      this.head = dequeueNode.next;
    }
    // 우선순위 가장 높은 노드에 연결된 노드 제거
    dequeueNode.next = null;

    this.size--;
    return dequeueNode;
  }

  // 큐가 비어있는지 확인하는 메서드
  isEmpty() {
    return this.size ? false : true;
  }

  // 큐의 모든 값을 출력하는 메서드
  printQueue() {
    let head = this.head;
    while (head) {
      console.log(`${head.priority}: ${head.data}`);
      head = head.next;
    }
  }
}

let q = new PriorityQueue3();

q.enqueue(2, "second");
q.enqueue(4, "forth!");
q.enqueue(3, "third");
q.enqueue(1, "first");
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
console.log("============");
q.dequeue();
q.printQueue();
console.log(q.size, q);
