/**
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 * @param {string} phone_number 
 * @returns {string}
 */
function solution(phone_number) {
  const lastNumber = phone_number.match(/\d{4}$/);
  const frontNumber = phone_number.slice(0, lastNumber.index);
  return phone_number.replace(frontNumber, '*'.repeat(frontNumber.length));
 
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"
