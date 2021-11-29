class Queue{

  constructor(){
    this.queue = [];
  }

  enqueue(data){
    this.queue.push(data);
  }

  dequeue(){
    return this.queue.shift();
  }

  isEmpty(){
    this.queue.length ? true : false;
  }

  peek(){
    return this.queue[0];
  }

  size(){
    return this.queue.length;
  }
 
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q)


