class Node{
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}

export default class LinkedStack{
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(data){
    const node = new Node(data,this.top); // 헤드 노드가 있었다면 기존 헤드는 next로
    this.top = node; // 삽입 데이터는 새 헤드로
    this.size++;
  }

  pop(){
    if(this.isEmpty()){
      console.log('저장된 값이 없습니다');
      return;
    }
    else{
      const value = this.top.data;
      this.top = this.top.next;
      this.size--;
      return value;
    }
  }

  peek(){
    if(this.isEmpty())
      return '값이 없습니다';
    else
      return this.top.data;
    
  }

  isEmpty(){
    if(this.top === null) return true;
  }

  printStack(){
    if(this.isEmpty()){
      console.log('값이 없습니다');
      return;
    }else{
      let node = this.top;
      while(node){
        console.log(node.data);
        node = node.next;
      }
    }
  }

}

let st = new LinkedStack();

st.push(1);
st.push(2);
st.push(3);
st.printStack();

console.log('');
st.pop();
st.printStack();

console.log('');
console.log(`peek(): ${st.peek()}`);
st.printStack();