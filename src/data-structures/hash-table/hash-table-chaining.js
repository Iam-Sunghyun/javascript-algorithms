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

  // 접근자 프로퍼티
  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) { // 입력키의 해시 값(주소)에 값이 있는지 체크
      for (let i = 0; i < this.table[index].length; i++) {
        // 입력키와 일치하는 키값이 있는지 해당 버킷의 모든 슬롯 체크
        // 있다면 값 새롭게 갱신
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // 없다면 해당 인덱스에 새롭게 push
      this.table[index].push([key, value]);
    } else { // 입력키의 해시 값(주소)에 값이 없다면 배열 초기화 후 push
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key){
    const index = this._hash(key); 
    if(this.table[index]){  // 입력키의 해시 값(주소)에 값이 있는지 체크
      for(let i = 0; i < this.table[index].length; i++){
        // 입력키와 일치하는 키값이 있는지 해당 버킷의 모든 슬롯 체크
        // 있다면 해당 키의 값 return
        if(this.table[index][i][0] === key){
          return this.table[index][i][1];
        }
      }
    }else{ // 입력키의 해시 값(주소)에 값이 없다면 undefined return
      return undefined;
    } 
  }

  remove(key){
    const index = this._hash(key);
    // 키에 연결된 해시 값(주소)에 값이 있는지, 공백 값은 아닌지 검사
    if(this.table[index] && this.table[index].length){ 
      for(let i = 0; i < this.table[index].length; i++){
        // 입력키와 일치하는 키값이 있는지 해당 버킷의 모든 슬롯 체크
        // 있다면 해당 키의 값 return
        if(this.table[index][i][0] === key){
          this.table[index][i].splice(i,1); 
          this.size--;
          return true;
        }
      }
    }else{ // 해시 값에 데이터가 없다면
      return false;
    }
  }
  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

console.log(ht.display());
