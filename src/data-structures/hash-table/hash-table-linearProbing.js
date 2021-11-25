
class HashTable{
  
  constructor(){
    const bucket = 127;
    this.table = new Array(bucket);
    this.size = 0;
  }
  
  // 해시 함수()
  // 입력 값(키)의 문자들을 정수로 변환하여 더한 다음
  // 버킷 크기(테이블 크기)로 나머지 연산(%)한 결과를 해시 값으로 사용한다. -> 버킷 크기를 초과하지 않기 위해
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);  // charCodeAt() -> 지정된 문자열의 문자를 유니 코드로 반환
    }
    return hash % this.table.length;
  }
  
  set(key, value) {
    let index = this._hash(key);
    let i = index;
    while(this.table[index] !== undefined ){
      if(this.table[index][0] === key){
        this.table[index][1] = value;
        return;
      }
      if(this.table[index][0].length){  // 빈 배열이라면(사용한적 있지만 지금 값이 없는 버킷) 값 삽입
        this.table[index] = [];
        this.table[index].push(key,value);
        this.size++;
       return;
      }
      index = (index+1) % this.table.length;
      if(index === i){
        console.log('테이블이 꽉 찼습니다')
        return;
      }
    }
    this.table[index] = [];
    this.table[index].push(key,value);
    this.size++;
  }
  
  get(key){
    let index = this._hash(key); 
    let i = index;
    while(this.table[index] !== undefined){ // 사용한 적 없는 버킷을 만날때까지 계속 탐색
      if(this.table[index][0] === key){  // 입력키의 해시 값(주소)에 값이 있는지 체크
        console.log(`${key}: ${this.table[index][1]}`);
        return;
      }
      index = (index+1) % this.table.length;
      if(index === i){      // 한 바퀴 다 돌았는지 체크
        console.log(`${key} 의 값이 없습니다`);
        return;
      }
    }
    console.log(`${key} 의 값이 없습니다`);
  }

  remove(key){
    let index = this._hash(key);
    let i = index;
    // 키에 연결된 해시 값(주소)에 값이 있는지, 빈 배열인지 확인
    while(this.table[index] && this.table[index].length){ 
      if(this.table[index][0] === key){ // 주의!!
        this.table[index].splice(0,2); // 반복적인 충돌로 인해 군집화가 일어난 부분에서, 중간에 위치한 값을 삭제한 후 만약 undefined을 넣어버리면
        this.size--;                   // 충돌로 밀려난 나머지 값들은 검색할 수 없게 된다.(get 함수는 버킷의 요소가 undefined인 경우 탐색을 중단하기 때문에) 
        return true;                   
      } 
      index = (index+1) % this.table.length;
      if(index === i){
        console.log(`${key} 의 값이 없습니다`);
        return;
      }
   }
  }
  display() {
    for(let i = 0; i < this.table.length; i++){
      if(this.table[i] !== undefined && this.table[i].length !== 0){
        console.log(`${i} : [ ${this.table[i][0]}: ${this.table[i][1]} ] `)
      }
  }
}
}
  
  const ht = new HashTable();
  ht.set('Canada', 300);
  ht.set('Canada', 400);
  ht.set('Canada', 500);
  ht.set('123',123);
  ht.set('231',231);
  ht.set('213',213);
  ht.get('231');
  ht.get('232312');
  ht.remove('231');
  
  ht.display()
  


  
  
  