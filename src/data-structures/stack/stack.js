export default class Stack {
  constructor(size) {
    this.top = -1;
    this.arr = new Array(size);
  }
  // 스택에 값을 추가하는 메서드
  push(item) {
    if (this.isFull()) {
      console.log("스택이 꽉 찼습니다");
    } else {
      this.top++;
      this.arr[this.top] = item;
    }
  }
  // 스택에서 값을 제거하는 메서드
  pop() {
    if (this.isEmpty()) {
      console.log("저장된 값이 없습니다");
    } else {
      return this.arr.splice(this.top--, 1, undefined);
    }
  }
  // 스택의 가장 위에 있는 값을 확인하는 메서드
  peek() {
    if (this.isEmpty()) return "값이 없습니다";
    else return this.arr[this.top];
  }
  // 스택이 비어있는지 확인하는 메서드
  isEmpty() {
    if (this.top === -1) return true;
  }
  // 스택이 꽉 찼는지 확인하는 메서드
  isFull() {
    if (this.top === this.arr.length - 1) return true;
  }
  // 스택의 크기를 확인하는 메서드
  size() {
    return this.top + 1;
  }
  // 스택의 모든 값을 출력하는 메서드
  printStack() {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== undefined) console.log(`${i}: ${this.arr[i]}`);
    }
  }
}
/**
let st = new Stack(5);

st.push(10);
st.push(20);
st.push(30);
st.push(40);
st.push(50);
st.push(60);
console.log(st.size());
console.log(st.peek());
console.log(st.pop());
console.log(st.size());
st.printStack();
*/
