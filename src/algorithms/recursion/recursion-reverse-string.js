/**
 * 재귀(recursion) 예제
 * - 문자열 반전 함수
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome'));
console.log(reverse('rithmshool'));
