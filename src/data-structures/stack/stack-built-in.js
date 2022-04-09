class Stack{
  
  #arr  // private 클래스 멤버 선언
  constructor(array = []){
    if(!Array.isArray(array)){
      throw new TypeError(`${array}가 배열이 아닙니다.`);
    }
    this.#arr = array;
  }

  push(item){
    this.#arr.push(item);
  }

  pop(){
    return this.#arr.pop();
  }

  peek(){
    return this.#arr[this.#arr.length-1];
  }

  entries(){
    return [...this.#arr]; 
  }

  isEmpty(){
    if(this.#arr.length === 0) return true;
  }

  size(){
    return this.#arr.length;
  }
}

const a = new Stack([1,2,3,4,5]);
console.log(a);

a.push(6);
console.log(a.entries());
