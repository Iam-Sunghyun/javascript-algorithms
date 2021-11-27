// 노드
class Node{
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}
// 단순 연결 리스트
class LinkedList{
  constructor(){
    this.head = null;   // 헤드 포인터
    this.size = 0;
  }
  // 맨 앞 삽입
  insertHead(data){
    const node = new Node(data,this.head); // 헤드 노드가 있었다면 기존 헤드는 next로
    this.head = node; // 삽입 데이터는 새 헤드로
    this.size++;
  }
  
  // 맨 뒤 삽입
  append(data){ 
    const node = new Node(data)
    let current;
    // 헤드 노드가 없다면(빈 연결 리스트)?
    if(!this.head){
      this.head = node;
      this.size++;
      return;
    }else{
      current = this.head; // 헤드 참조 
      while(current.next){
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  // 특정 위치 삽입
  insertAt(data,index){
    if(index < 0 || index > this.size){
      return '허용 인덱스가 아닙니다';
    }
    if(index === 0){
      this.insertHead(data);
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
    node.next = current;
    this.size++;
  }
  // 특정 노드 삭제
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
      this.size--;
    }
  }
 // 특정 노드 데이터 조회
  getNode(index){
    let current = this.head;
    if(index < 0 || index > this.size - 1){
      console.log(`${index}의 값이 없습니다`);
      return;
    }
    if(index === 0){
      return current.data;
    }else{
      for(let i = 0; i < index; i++){
        current = current.next;
      }
      return current.data;
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
linkedList.deleteAt(0);
linkedList.getNode(-1);
console.log(`0번 인덱스 값: ${linkedList.getNode(0)}`);
console.log(`1번 인덱스 값: ${linkedList.getNode(1)}`);
console.log(`2번 인덱스 값: ${linkedList.getNode(2)}`);
console.log(linkedList);
