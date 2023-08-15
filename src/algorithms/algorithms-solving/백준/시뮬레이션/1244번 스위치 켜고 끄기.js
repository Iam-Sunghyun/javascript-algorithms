// 백준 시뮬레이션 실버4 https://www.acmicpc.net/problem/1244
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(switches, students) {

  // 스위치 길이가 1인 경우(값이 하나인 경우)
  if (switches.length === 1) {
    // 학생 수가 홀수인 경우 - 스위치 값이 홀수번 만큼 not 연산이 적용되므로 결국 1번의 not 연산과 동일
    if (students.length % 2 === 1) {
      return Number(!switches[0]);
      // 짝수인 경우 - 스위치 값이 짝수번 만큼 not 연산 적용 -> 원래 값 그대로 유지
    } else {
      return switches[0];
    }
  }

  for ([student, num] of students) {
    // 스위치는 1번부터 시작하므로 배열 인덱스론 -1 해줘야한다
    const number = num - 1;
    // 남학생인 경우
    if (student === 1) {
      for (let i = number; i < switches.length; i += num) {
        switches[i] = switches[i] === 0 ? 1 : 0; // Number(!switches[i])
      }
    }
    // 여학생인 경우
    if (student === 2) {
      let i = 1;
      switches[number] = Number(!switches[number]);
      while (switches[number + i] === switches[number - i]) {
        // 정중앙에서 시작하여 양끝 모두 switches 배열 범위를 벗어났을 경우 break;
        // 한쪽만 확인하여도 충분하므로 한쪽만 확인
        if (number + i > switches.length) {
          break;
        } else {
          switches[number + i] = Number(!switches[number + i]);
          switches[number - i] = Number(!switches[number - i]);
        }
        i += 1;
      }
    }
  }

  // 20개씩 묶기
  const answer = [];
  for (let i = 1; i <= Math.ceil(switches.length / 20); i++) {
    const tmp = switches.slice((i * 20) - 20, (i * 20)).join(' ');
    answer.push(tmp);
  }

  return answer.join('\n');
}

console.log(solution(input[1], input.slice(3)));