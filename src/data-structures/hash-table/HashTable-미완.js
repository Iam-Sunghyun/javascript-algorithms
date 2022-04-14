import LinkedList from '../linked-list/linked-list.js';


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
    const node = bucketsLinkedList.head;

    // 인덱스에 값 없으면 삽입
    if(!node){
      bucketsLinkedList.append({key, data});
    
    // 있으면 갱신
    }else{
      node.data.data = data;
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
