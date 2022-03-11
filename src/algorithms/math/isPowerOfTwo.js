/**
 * 2의 거듭제곱 판별
 * @param {number} num
 * @return {boolean} 
 */
export default function isPowerOfTwo(num){
 
  if (num < 1) {
    return false;
  }
  
  let dividedNum = number;
  while (dividedNum !== 1) {
    
    if (dividedNum % 2 !== 0) {
      return false;
    }
    
    dividedNum /= 2;
  }
  
  return true;
}
