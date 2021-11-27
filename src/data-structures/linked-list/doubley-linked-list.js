// 이중 연결 리스트
class Node{
  constructor(data,prev = null,next = null){
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class LinkedList{
  constructor(){
    this.head = null;   // 헤드 포인터
    this.size = 0;
  }
  // 맨 앞 삽입
  insertHead(data){
    if(this.head !== null){
      const node = new Node(data,null,this.head); // 헤드 노드가 있었다면 기존 헤드는 next로
      this.head.prev = node;
      this.head = node; // 삽입 데이터는 새 헤드로
    }else{
      const node = new Node(data);
      this.head = node;
    }
    this.size++;
  }

 // 맨 뒤 삽입
  append(data){ 
    const node = new Node(data);
    let current;
    // 헤드 노드가 없다면(빈 연결 리스트 경우)
    if(!this.head){
      this.head = node;
    }else{
      current = this.head; 
      while(current.next){
        current = current.next;
      }
      node.prev = current;
      current.next = node;
    }
    this.size++;
  }

  // 특정 위치 삽입
  insertAt(index,data){
    if(index < 0 || index > this.size){  
      return '허용 인덱스가 아닙니다';
    }
    if(index === 0){
      this.insertHead(data);
      size++;
      return;
    }
    if(index === this.size){
      this.append(data);
      return;
    }
    const node = new Node(data)
    let current = this.head;
    let previous;
    for(let i = 0; i < index; i++){
      previous = current;  
      current = previous.next;
    }
    previous.next = node;
    current.prev = node;
    node.prev = previous;
    node.next = current;
    this.size++;
  }

  deleteAt(index){
    if(index < 0 || index > this.size - 1){
      return '허용 인덱스가 아닙니다';
    }
    if(index === 0){
      this.head = this.head.next;
      this.size--;
      return;
    }else{
      let current = this.head;
      let previous;
      for(let i = 0; i < index; i++){
        previous = current;  
        current = previous.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
      current.next = null;
      current.prev = null;
      this.size--;
    }
  }

  getNode(index){
    let current = this.head;
    if(index < 0 || index > this.size - 1){
      console.log(`${index}의 값이 없습니다`);
      return;
    }else{
      for(let i = 0; i < index; i++){
        current = current.next;
      }
      console.log(`${index}번 데이터: ${current.data}`);
      console.log(`${index}번 prev(${index-1}번) 데이터:`,current.prev);
      return;
    }
  }
  
  printList(){
    let current = this.head;
    for(let i = 0; i < this.size ; i++){
      console.log(`${i}번 데이터: ${current.data}`);
      current = current.next;
    }
  }

  returnSize(){
    return this.size;
  }
}

let linkedList = new LinkedList();
linkedList.insertHead(10);
linkedList.insertHead(20);
linkedList.append(30);
linkedList.insertAt(3,40);
linkedList.getNode(3)

console.log('=============');
linkedList.deleteAt(1);
linkedList.getNode(0)
linkedList.getNode(1)
console.log('=============');
console.log(linkedList);
linkedList.printList();
