// https://school.programmers.co.kr/learn/courses/30/lessons/388351?language=javascript
function solution(schedules, timelogs, startday) {
  let result = 0;

  for (let i = 0; i < schedules.length; i++) {
    let limit = schedules[i] + 10;
    let start = startday - 1;
    let check = false;

    if (limit % 100 >= 60) {
      limit += 100;
      limit -= 60;
    }

    for (let j = 0; j < timelogs[i].length; j++) {
      if (start === 5 || start === 6) {
        start = (start + 1) % 7;
        continue;
      }
      if (limit < timelogs[i][j]) {
        check = true;
        break;
      }
      start = (start + 1) % 7;
    }

    if (!check) {
      result += 1;
    }
  }
  return result;
}
