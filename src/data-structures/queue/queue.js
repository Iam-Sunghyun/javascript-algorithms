class Queue{
  #queue // private 클래스 멤버
  constructor(array = []){
    if(!Array.isArray(array)){
      throw new TypeError(`${array}는 배열이 아닙니다.`);
    }
    this.#queue = array;
  }

  enqueue(data){
    this.#queue.push(data);
  }

  dequeue(){
    return this.#queue.shift();
  }

  isEmpty(){
    this.#queue.length ? true : false;
  }

  peek(){
    return this.#queue[0];
  }

  entries(){
    return [...this.#queue];
  }

  size(){
    return this.#queue.length;
  }
 
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.entries())
console.log(q.dequeue());
console.log(q)


