// 단순 연결 리스트
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
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
    const node = new Node(data, this.head); // 헤드 노드가 있었다면 기존 헤드는 next로
    this.head = node; // 삽입 데이터는 새 헤드로
    this.size++;
    return true;
  }

  // 뒤 삽입
  append(data) {
    // 헤드 노드가 없다면(빈 연결 리스트)?
    if (!this.head) {
      this.insertHead(data);
      return true;
    }
    if (data === undefined) {
      console.log("데이터를 입력하세요");
      return false;
    }
    const node = new Node(data);
    let current = this.head; // 헤드 참조
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return true;
  }

  // 특정 위치 삽입
  insertAt(data, index) {
    if (index < 0 || index > this.size || index === undefined) {
      console.log("허용 인덱스가 아닙니다");
      return false;
    }
    if (data === undefined) {
      console.log("데이터를 입력하세요");
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

  // 인덱스로 노드 삭제하기(노드는 반환됨)
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
    current = null;
    this.size--;
    return node;
  }

  // 특정 인덱스 노드 참조하기
  getNodeByIndex(index) {
    if (index < 0 || index > this.size - 1 || index === undefined) {
      console.log(`${index}번 인덱스 값이 없습니다`);
      return false;
    }
    if (index === 0) {
      console.log(`${index}번(헤드) 데이터: ${this.head.data}`);
      return true;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // 특정 값과 일치하는 첫 번째 노드 참조하기
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

  // 인수로 전달한 배열 -> 연결 리스트
  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  // 연결 리스트 -> 배열
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
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

const linkedList = new LinkedList();
linkedList.insertHead(10);
linkedList.insertHead(30);
linkedList.append(30);
linkedList.insertAt(40, 3);
console.log(linkedList.returnSize());
// console.log(linkedList.deleteAt(2));
console.log(linkedList.printList());
console.log(linkedList.getNodeByIndex(3));
console.log("==============");
