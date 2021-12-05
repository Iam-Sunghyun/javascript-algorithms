class Node{
  constructor(priority,data,next=null){
    this.priority = priority;
    this.data = data;
    this.next = next;
  }
}
class PriorityQueue3{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  enqueue(priority=0,data){
    const node = new Node(priority,data,this.head);
    this.head = node;
    this.size++;
  }

  dequeue(){
    let head = this.head;
    let dequeueNode = head;
    let prevNode = null;
    while(head.next){
      if(dequeueNode.priority > head.next.priority){
        dequeueNode = head.next;
      }
      prevNode = head;
      head = head.next;
    }
    prevNode.next = dequeueNode.next;
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

let q = new PriorityQueue3();

q.enqueue(2,'second');
q.enqueue(3,'third');
q.enqueue(4,'forth!');
q.printQueue()
console.log(q.dequeue());
q.printQueue()
console.log(q.size);
console.log(q.dequeue());


