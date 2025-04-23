// 이중 연결 리스트
class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class DoubleyLinkedList {
  constructor() {
    this.head = null; // 헤드 포인터
    this.size = 0;
  }

  // 맨 앞 삽입
  insertHead(data) {
    if (data === undefined) {
      console.log("데이터를 입력하세요");
      return false;
    }
    if (this.head !== null) {
      const node = new Node(data, null, this.head); // 헤드 노드가 있었다면 기존 헤드는 next로
      this.head.prev = node;
      this.head = node; // 삽입 데이터는 새 헤드로
    } else {
      const node = new Node(data);
      this.head = node;
    }
    this.size++;
    return true;
  }

  // 맨 뒤 삽입
  append(data) {
    // 헤드 노드가 없다면(빈 연결 리스트 경우)
    if (!this.head) {
      this.insertHead(data);
      return true;
    }
    const node = new Node(data);
    let current;
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    node.prev = current;
    current.next = node;
    this.size++;
    return true;
  }

  // 특정 위치 삽입
  insertAt(index, data) {
    if (index < 0 || index > this.size || index === undefined) {
      console.log("허용 인덱스가 아닙니다");
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
    current.prev = node;
    node.prev = previous;
    node.next = current;
    this.size++;
    return true;
  }

  deleteAt(index) {
    if (index < 0 || index > this.size - 1 || index === undefined) {
      console.log("허용 인덱스가 아닙니다");
      return false;
    }
    if (index === 0) {
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
    let node = current;
    previous.next = current.next;
    current.next.prev = previous;
    current = null;
    this.size--;
    return node;
  }

  getNodeByIndex(index) {
    if (index < 0 || index > this.size - 1 || index === undefined) {
      console.log(`${index}번 인덱스 값이 없습니다`);
      return false;
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
    console.log("데이터가 없습니다.");
    return false;
  }

  printList() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }

  returnSize() {
    return this.size;
  }
}

let linkedList = new DoubleyLinkedList();
linkedList.insertHead(10);
linkedList.insertHead(20);
linkedList.append(30);
linkedList.insertAt(3, 40);
linkedList.getNodeByIndex(3);
console.log(linkedList.getNodeByData(30));
console.log(linkedList.returnSize());
console.log(linkedList.printList());
// console.log('=============');
// linkedList.deleteAt(1);
// linkedList.getNodeByIndex(0);
// linkedList.getNodeByIndex(1);
// console.log(linkedList.printList());
