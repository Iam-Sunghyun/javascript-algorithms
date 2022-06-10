/**
 * 약수 구하기
 * 
 * @param {number} num
 * @return {number[]} divisor
 */
function getDivisor(num) {

  let divisor = [];
  for(let i = 0; i <= num; i++){
    if(num % i === 0){
      divisor.push(i);
    }
  }
  return divisor;
}

// test
let a = getDivisor(100);
console.log(a);
