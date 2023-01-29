import LinkedList from '../linked-list/linked-list.js';

// 보완 필요

const defaultHashTableSize = 32;

export default class HashTable {
 
  construct(hashTableSize = defaultHashTableSize){
   // 매개변수 크기만큼의 배열을 만들고, 각 요소에 빈 연결리스트(헤드)를 채움. 
   this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
  }
 
 
  hash(key){
     
   const hash = Array.prototype.reduce.call(key, (accumulator, currentValue) => accumulator += currentValue.charCodeAt(), 0); 
           // = Array.from(key).reduce((accumulator, currentValue) => accumulator += currentValue.charCodeAt(), 0);
   
   return hash % buckets.length;
  }
 
 
  set(key, data){
    // keyHash -> 정수인 것 기억
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketsLinkedList = this.buckets[keyHash];
    let node = bucketsLinkedList.head;

  
    /* 충돌 처리로 체이닝을 구현해보았음*/
    // 버킷의 해시키(keyHash) 인덱스에 노드가 없으면 추가
    if(!node){
      bucketsLinkedList.append({key, data});
     
    }else{
    // 노드가 있다면 key값이 같은 노드가 있는지 검사, 있다면 data 갱신
      while(node !== null){
       
        if(node.data.key === key){
          node.data.data = data;
          return;
        }
       
        node = node.next;
      }
    // key값이 같은 노드가 없으면 새로운 노드 추가
      bucketsLinkedList.append({key, data});
    }

  }

 
 
  delete(key) {
  
  }
 
 
  get(key) {
   
  }

 
  has(key) {
    
  }

 
  getKeys() {
  
  }


  getValues() {
   
  }
 
}
