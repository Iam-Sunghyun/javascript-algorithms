// 원형 큐
class Queue{
  constructor(size){
    this.queue = new Array(size);
    this.front = 0; // 전단 인덱스 
    this.rear = 0;  // 후단 인덱스
    this.elements = 0;
    this.size = size;
  }

  enqueue(data){
    if(this.isFull()){
      return;
    }else{
      this.rear = (this.rear + 1) % this.size;  // 원형 큐 핵심 (나머지 연산으로 인덱싱)
      this.queue[this.rear] = data;
      this.elements++;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('큐가 비어 있습니다.')
      return;
    }else{
      this.front = (this.front + 1) % this.size;
      this.elements--;
      return this.queue.splice(this.front,1,undefined);
    } 
  }

  isFull(){
    if(this.front === (this.rear + 1) % this.size){
      console.log('큐가 꽉 찼습니다');
      return true;
    }
  }

  isEmpty(){
    if(this.front === this.rear){
      console.log('큐가 비어있습니다');
      return true;
    }
  }

  peek(){
    let front = (this.front+1) % this.size
    console.log(`${front}번 값: ${this.queue[front]}`)
    return this.queue[front];
  }

  returnSize(){
    return this.elements;
    // return (this.rear - this.front + this.size) % this.size
  }
 
}

let q = new Queue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue()
q.enqueue(4);
q.enqueue(5);
q.peek();

console.log(q)
