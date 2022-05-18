/**
 * 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
 * @param {number} maxIndex  
 * @returns {object} 
 */
const fibonacci = function(maxIndex){ 
  let count = 0;
  let [pre, cur] = [0, 1];

  // maxIndex번 값까지 구하는 피보나치 이터러블 객체 반환 (이터러블이면서 이터레이터인 객체)
  return { 
    [Symbol.iterator](){return this;},     
    next(){
        [pre, cur] = [cur, pre + cur];
        count += 1;
        // 이터레이터 result 객체 반환
        return { value: cur, done: count > maxIndex }; 
      }
  };
};


for(const item of fibonacci(10)){
  console.log(item);
};
