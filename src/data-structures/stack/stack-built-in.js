class Stack{
  constructor(){
    this.arr = [];
  }

  push(item){
    this.arr.push(item);
  }

  pop(){
    return this.arr.pop();
  }

  peek(){
    return this.arr[this.arr.length-1];
  }

  isEmpty(){
    if(this.arr.length === 0) return true;
  }

  size(){
    return this.arr.length;
  }
}
