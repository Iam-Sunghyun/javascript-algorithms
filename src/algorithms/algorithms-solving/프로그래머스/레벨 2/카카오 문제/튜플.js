/**
 * 프로그래머스 레벨 2
 * 2019 카카오 개발자 겨울 인턴십 https://school.programmers.co.kr/learn/courses/30/lessons/64065
 * @param {string} s 
 * @returns {number[]}
 */
function solution(s) {
  // 정규표현식으로 문자열에서 숫자만 거르고 숫자의 빈도도 같이 세준다. 
  const split = s.match(/\d+/g).reduce((acc, num) => {
    acc[num] = acc[num] + 1 || 1;
    return acc;
  }, {});

  // 빈도가 높은 값부터 우선 정렬(빈도에 따른 내림차순 -> 많이 나온 수일수록 앞자리).
  return Object.entries(split)
               .sort((a, b) => b[1] - a[1])
               .map(a => +a[0]);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{20,111},{111}}"));