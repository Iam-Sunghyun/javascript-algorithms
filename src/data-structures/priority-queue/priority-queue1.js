// 정렬되지 않은 배열 우선순위 큐
class PriorityQueue1{
  constructor(){
    this.queue = [];
  }

  enqueue(priority = 0,data){
    this.queue.push([priority,data]);
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('큐가 비어있습니다.');
      return;
    }
    let first = this.queue[0][0];
    for(let i = 0; i < this.queue.length; i++){
      if(this.queue[i][0] < first){
        first = i;
      }
    }
    let dequeueValue = this.queue.splice(first,1);
    return dequeueValue;
  }

  isEmpty(){
    return this.queue.length ? false : true;
  }
}

let q = new PriorityQueue1();

q.enqueue(2,'second');
q.enqueue(3,'third');
q.enqueue(4,'forth!');
console.log(q.queue);
q.enqueue(1,'first!');
console.log(q.queue);

console.log(q.dequeue());
console.log(q.queue);
console.log(q.isEmpty());
