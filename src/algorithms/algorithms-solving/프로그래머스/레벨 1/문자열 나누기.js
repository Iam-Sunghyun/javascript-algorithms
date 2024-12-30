// https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  const string = [...s];
  let answer = 0;

  for (let i = 0; i < string.length; i++) {
    const count = [1, 0]; // [같은 문자 수, 다른 문자 수]
    const str = string[i];
    let check = false; // 순회 여부 확인 용 -> 순회 안했다면 마지막 문자 하나라는 의미
    for (let j = i + 1; j < string.length; j++) {
      check = true; // 순회 O

      // x와 j번 문자가 다르면 count[1] += 1
      if (str !== string[j]) {
        count[1] += 1;
      } else {
        // x와 j번 문자가 같으면 count[0] += 1
        count[0] += 1;
      }
      i = j;
      // 다른 문자, 같은 문자 수 동일하면 break;
      if (count[0] === count[1]) {
        answer += 1;
        break;
      }
    }
    // x 우측 문자들을 순회하지 않은 경우(x가 마지막 문자인 경우)
    if (check === false) {
      answer += 1;
      break;
    }
    // x 우측 전부 순회했지만 같은 문자, 다른 문자 수가 다른 채로 끝난 경우
    if (check === true && count[0] !== count[1]) {
      answer += 1;
      break;
    }
  }

  return answer;
}
