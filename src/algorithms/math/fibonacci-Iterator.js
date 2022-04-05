/**
 * 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
 * @param {number} maxIndex  
 * @returns {object} 
 */
const fibonacci = function(maxIndex){ 
  let count = 0;
  let [pre, cur] = [0, 1];

  // 사용자 정의 이터러블 객체 반환
  return {
    [Symbol.iterator](){     
      return {
        next(){
          [pre, cur] = [cur, pre + cur];
          count += 1;
          // 이터레이터 result 객체 반환
          return { value: cur, done: count >= maxIndex }; 
        }
      };
    }
  };
};

for(const item of fibonacci(10)){
  console.log(item);
};
