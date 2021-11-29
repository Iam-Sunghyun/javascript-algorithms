class Node{
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }
  
  enqueue(data){
    const node = new Node(data);
    if(!this.front){
      this.front = node;
      this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue(){
    if(!this.front){
      console.log('큐가 비어있습니다.')
      return;
    }
    let front = this.front.data;
    this.front = this.front.next;
    console.log(`삭제 값은 ${front} 입니다`);
    return front;
  }

  peek(){
    console.log(`front 데이터: ${this.front.data}`);
    return this.front.data;
  }

  isEmpty(){
    if(this.front === null && this.rear === null)
      return true;
    return false;
  }

  printList(){
    let current = this.front;
    let i = 0;
    while(current){
      console.log(`${i}번 데이터: ${current.data}`);
      current = current.next;
      i++;
    }
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.printList()
console.log('=======')
q.dequeue();
q.dequeue();
q.printList();
q.peek();
console.log(q);



