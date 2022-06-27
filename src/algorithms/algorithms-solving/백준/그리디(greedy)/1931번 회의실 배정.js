// 백준 1931번 그리디 https://www.acmicpc.net/problem/1931
// 반례 https://www.acmicpc.net/board/view/81289
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const array = [];

for (let i = 2; i < input.length; i += 2) {
  array.push([+input[i - 1], +input[i]]);
}

/**
 * 반례 
 * 5
 * 6 7
 * 6 6
 * 5 6
 * 5 5
 * 7 7
 * 답:5 
 * 끝나는 시간을 기준으로 정렬할 경우 [[5,5], [6,6], [5,6], [6,7], [7,7]]와 같이 정렬돼서
 * 답이 4가 나옴. 끝나는 시간이 같을 경우 시작 시간이 빠르 경우를 앞에 정렬해줘야 모든 경우를
 * 놓치지 않을 수 있다.
 */
function solution(time) {
  const meeting = [];

  time.sort((a, b) => {
    // 끝나는 시간이 같은 회의의 경우
    if (a[1] - b[1] === 0) {
    // 시작 시간이 빠른 회의를 우선적으로 정렬
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  meeting.push(time[0]);

  for (let i = 1; i < time.length; i++) {
    if (meeting[meeting.length - 1][1] <= time[i][0]) {
      meeting.push(time[i]);
    }
  }
  return meeting.length;
}

console.log(solution(array)); 
