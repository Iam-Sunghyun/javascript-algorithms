// 원형 연결 리스트
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;   // 헤드 포인터
    this.tail = null;
    this.size = 0;
  }

  // 맨 앞 삽입
  insertHead(data) {
    if (data === undefined) {
      console.log('데이터를 입력하세요');
      return false;
    }
    const node = new Node(data, this.head); // 헤드 노드가 있었다면 기존 헤드는 next로
    this.head = node; // 삽입 데이터는 새 헤드로
    if (!this.tail) {
      this.tail = node;
    }
    this.tail.next = this.head;
    this.size++;
    return true;
  }

  // 맨 뒤 삽입
  append(data) {
    // 헤드 노드가 없다면(빈 연결 리스트)?
    if (!this.head) {
      this.insertHead(data);
      return true;
    }
    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
    this.size++;
    return true;
  }

  // 특정 위치 삽입
  insertAt(data, index) {
    if (index < 0 || index > this.size || index === undefined) {
      console.log('허용 인덱스가 아닙니다');
      return false;
    }
    if (index === 0) {
      this.insertHead(data);
      return true;
    }
    if (index === this.size) {
      this.append(data);
      return true;
    }
    const node = new Node(data);
    let current = this.head;
    let previous;
    for (let i = 1; i < index; i++) {
      previous = current;
      current = previous.next;
    }
    previous.next = node;
    node.next = current;
    this.size++;
    return true;
  }

  deleteAt(index) {
    if (index < 0 || index > this.size - 1 || index === undefined) {
      console.log('허용 인덱스가 아닙니다');
      return false;
    }
    if (index === 0) {  // 삭제할 노드가 헤드라면
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    let previous;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = previous.next;
    }
    if (current.data === this.tail.data) {  // 삭제할 노드가 tail이라면
      this.tail = previous;
    }
    let node = current;
    previous.next = current.next;
    current = null;
    this.size--;
    return node;
  }

  getNodeByIndex(index) {
    if (index < 0 || index > this.size - 1 || index === undefined) {
      console.log(`${index}번 인덱스 값이 없습니다`);
      return false;
    }
    if (index === 0) {
      console.log(`${index}번(헤드) 데이터: ${this.head.data}`);
      return true;
    }
    if (index === this.size - 1) {
      console.log(`${index}번(마지막) 데이터: ${this.tail.data}`);
      return true;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  getNodeByData(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    console.log('데이터가 없습니다.');
    return false;
  }

  printList() {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === this.size - 1) {
        console.log(`${i}번(마지막) 데이터: ${current.data}`);
      } else {
        console.log(`${i}번 데이터: ${current.data}`);
      }
      current = current.next;
    }
  }

  returnSize() {
    return this.size;
  }
}

let linkedList = new CircularLinkedList();
linkedList.insertHead(10);
linkedList.insertHead(20);
linkedList.insertHead(30);
linkedList.printList();
console.log('===========');
linkedList.deleteAt(2);
linkedList.insertHead(50);
linkedList.getNodeByIndex(2);
console.log('===========');
linkedList.printList();
console.log(linkedList.tail);
