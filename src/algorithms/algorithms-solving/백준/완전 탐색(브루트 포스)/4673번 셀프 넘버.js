// 백준 4673번 완전 탐색 https://www.acmicpc.net/problem/4673
function solution() {
  const answer = [];

  for (let i = 1; i <= 10000; i++) {
    const result = getConstructor(i);
    if (!result) answer.push(i);
  }
  return answer.join('\n');
}

// 생성자가 있는지 체크하는 함수
function getConstructor(target) {

  // 1부터 target 이하 숫자 i 중 target의 생성자가 있는지 체크
  for (let i = 1; i <= target; i++) {

    const tmp = i.toString();  // 숫자 i의 각자리 순회를 위해 문자열 형변환
    let n = i;                 // d(i) 결과를 저장하기 위한 변수

    // d(i) 함수
    for (let j = 0; j < tmp.length; j++) {
      n += parseInt(tmp[j]);
    }

    // d(i) 함수의 결과 값이 target과 일치한다면 생성자이므로 tmp 반환
    if (n === target) return tmp;
  }

  // 생성자가 없다면 false (=== 셀프 넘버)
  return false;
}

console.log(solution());
