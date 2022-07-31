/**
 * 프로그래머스 **레벨 2** 
 * 2018 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * @param {string} str1 
 * @param {string} str2 
 * @returns {number}
 */
function solution(str1, str2) {

  // 다중집합용 배열
  const newStr1 = [];
  const newStr2 = [];

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  if (str1 === str2) return 65536;

  // 다중집합 생성
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i].match(/[^A-Z]/) || str1[i + 1].match(/[^A-Z]/)) continue;
    newStr1.push(str1[i] + str1[i + 1]);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i].match(/[^A-Z]/) || str2[i + 1].match(/[^A-Z]/)) continue;
    newStr2.push(str2[i] + str2[i + 1]);
  }

  // 교집합, 합집합 구하기
  const union = [...newStr1, ...newStr2];
  const interSection = newStr1.filter(str => {
    if(newStr2.includes(str)){
      newStr2.splice(newStr2.indexOf(str), 1); // 교집합 요소는 다음 비교때 중복될 수 있으므로 제거해주기
      return true;
    }
  });

  // 합집합에서 교집합 빼주기(다중집합이므로 중복 허용되지만 합집합 만들면서 생긴 중복요소는 제거해줘야 됨)
  interSection.forEach(str => union.splice(union.indexOf(str), 1));

  return Math.floor((interSection.length / union.length) * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("BAAAA", "AAA"));
