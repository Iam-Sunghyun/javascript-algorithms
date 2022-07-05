// 원형 큐
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0; // 전단 인덱스 
    this.rear = 0;  // 후단 인덱스
    this.elements = 0; // 요소 개수
    this.size = size; // 큐 크기
  }

  enqueue(data) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.size;  // 원형 큐 front, rear 인덱싱 핵심. 큐 크기로 나머지 연산하여 큐 크기를 벗어나지 않게 함.
    this.queue[this.rear] = data;
    this.elements++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('큐가 비어 있습니다.');
      return false;
    }
    this.front = (this.front + 1) % this.size;
    this.elements--;
    return this.queue.splice(this.front, 1, undefined);
  }                                                     

  isFull() {
    // front가 rear보다 한칸 앞에 위치해 있다면 꽉찬 것.
    if (this.front === (this.rear + 1) % this.size) {
      console.log('큐가 꽉 찼습니다');
      return true;
    }
  }

  isEmpty() {
    // front와 rear과 같은 위치라면 빈 큐.
    if (this.front === this.rear) {
      console.log('큐가 비어있습니다');
      return true;
    }
  }

  peek() {
    // front는 맨 앞 값의 한칸 앞에 위치해있기 때문에 +1을 더해주고 % this.size로 인덱스 구해준다.
    const front = (this.front + 1) % this.size;
    console.log(`${front}번 값: ${this.queue[front]}`);
    return this.queue[front];
  }

  elementsNum() {
    return this.elements;
    // === return (this.rear - this.front + this.size) % this.size; 
  }

}

let q = new CircularQueue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);
q.enqueue(5);
q.peek();
console.log(q.elementsNum());
console.log(q);
