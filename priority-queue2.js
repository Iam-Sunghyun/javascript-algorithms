class PriorityQueue2{

  constructor(){
    this.queue = [];
  }

  enqueue(priority = 0,data){
    if(this.isEmpty()){
      this.queue.push([priority,data]);
      return;
    }
    let insertIndex;
    for(let i = this.queue.length-1; i >= 0; i--){
      if(this.queue[i][0] < priority){
        insertIndex = i + 1;
        break;
      }
    }
    this.queue.splice(insertIndex,0,[priority,data]);
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('큐가 비어있습니다.');
      return;
    }
    return this.queue.shift();
  }

  isEmpty(){
    if(!this.queue.length) 
      return true;
  }

}

let q = new PriorityQueue2();
q.dequeue();
q.enqueue(4,'forth!');
q.enqueue(2,'second');
q.enqueue(3,'third');
console.log(q.queue);

q.enqueue(1,'first!');
q.enqueue(0,'zero!');
console.log(q.queue);

console.log(q.dequeue());
console.log(q.queue);
