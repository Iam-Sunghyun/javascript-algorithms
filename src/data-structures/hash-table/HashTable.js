import LinkedList from '../linked-list/linked-list.js';


const defaultHashTableSize = 32;

export default class HashTable {
 
  construct(hashTableSize = defaultHashTableSize){
   // 매개변수 크기만큼의 배열을 만들고, 각 요소에 빈 연결리스트(헤드)를 채움. 
   this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
  }
 
 
  hash(key){
   
   let hash = 0;
   
   const hash = Array.prototype.reduce.call(key, (accumulator, currentValue) => accumulator += currentValue.charCodeAt(), 0); 
           // = Array.from(key).reduce((accumulator, currentValue) => accumulator += currentValue.charCodeAt(), 0);
   
   return hash % buckets.length;
  }
 
 
  set(key, value) {
   
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
