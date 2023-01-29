/**
 * 약수 구하기
 * @param {number} num
 * @return {number[]} 
 */
function getDivisor(num) {
  let divisor = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }
  return divisor;
}

console.log(getDivisor(100));
