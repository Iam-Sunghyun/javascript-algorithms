/**
 * 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수(상향식)
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

// fibonacci()는 이터러블이면서 동시에 이터레이터인 객체를 반환한다
// for...of 문은 해당 이터러블+이터레이터 객체의 next() 메서드를 호출하여 이터레이터 result 객체를 반환받고
// result 객체의 value 값을 for...of 변수에 할당한다. 순회는 result 객체의 done 값이 true일 때까지 진행된다.
for(const item of fibonacci(10)){
  console.log(item);
};
