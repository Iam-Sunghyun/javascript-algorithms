/**?????
 * 슬라이딩 윈도우(sliding window) 예제
 * - 인수로 전달받은 문자열에서 고유값들로 이루어진 가장 긴 문자열을 반환하는 함수
 * @param {strung} str
 * @returns {number}
 */
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // 현재 값도 카운트 해주기 위해 부분 배열 시작 인덱스 + 1
    longest = Math.max(longest, i - start + 1);
    // 인덱스 저장
    seen[char] = i + 1;
  }
  return longest;
}

//console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('rithmschool')); // 7
