class Node{
  constructor(priority,data,next=null){
    this.priority = priority;
    this.data = data;
    this.next = next;
  }
}
class PriorityQueue4{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  enqueue(priority=0,data){
    let current = this.head;
    let prevNode = null;
    while(current){
      if(current.priority <= priority){
        prevNode = current;
        current = current.next;
      }else break;
    }
    if(!prevNode){
      const node = new Node(priority,data,this.head);
      this.head = node;
      this.size++;
    }
    else{
      const node = new Node(priority,data,prevNode.next);
      prevNode.next = node;
      this.size++
    }
  }

  dequeue(){
    let dequeueNode = this.head;    
    this.head = this.head.next;
    this.size--;
    return dequeueNode;
  }

  isEmpty(){
    return this.size ? false : true;
  }

  printQueue(){
    let head = this.head;
    while(head){
      console.log(`${head.priority}: ${head.data}`);
      head = head.next;
    }  
  }
}

let q = new PriorityQueue4();

q.enqueue(5,'second');
q.enqueue(1,'third');
q.enqueue(2,'forth!');
q.printQueue();
console.log('============');
console.log(q.dequeue());
q.printQueue();
console.log(q.dequeue());
q.printQueue();

