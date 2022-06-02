/**
 * 소수 판별 - 문제가 많아서 수정하다 보니 trialDivision이랑 똑같아졌다.. 
 * @param {number} num
 */
function isPrimeNum(num) {

  // 정수인데 1이하일 경우 false(소수 아니므로)
  if(num <= 1) return false;

  if(num <= 3) return true;

  if(num % 2 === 0) return false;

  for(let i = 3; i <= Math.floor(num**0.5); i += 2){
    if(num % i === 0) return false;  
  }  
  return true;
}

console.log(isPrimeNum(5));