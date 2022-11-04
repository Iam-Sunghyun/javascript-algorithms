/**
 * 2021 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/72411
 */
function solution(orders, course) {
  const answer = [];
  for (let i = 0; i < orders.length; i++) {
    let bool = true;
    for (let j = 0; j < orders[i][j].length; j++) {
      for (let k = 0; k < orders.length; k++) {
        // console.log(orders[i], orders[k])
        if (i === k || orders[k].length < orders[i].length) continue;
        
        if (orders[k].includes(orders[i][j])) bool = false;
      }
    }
    if (!bool) answer.push(orders[i]);
  }
  return orders;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])); //["ACD", "AD", "ADE", "CD", "XYZ"]

// 1차 풀이 기록
// const count = {};
// const courseSize = new Set([...course]);
// const answer = [];

// for (let i = 0; i < orders.length; i++) {
//   for (let j = 0; j < orders[i].length; j++) {
//     count[orders[i][j]] = count[orders[i][j]] ? count[orders[i][j]] + 1 : 1;
//   }
// }

// for (let i = 0; i < orders.length; i++) {
//   // course 크기에 부합하지 않으면 continue
//   if (!courseSize.has(orders[i].length)) continue;

//   // 단품메뉴 중 2명 이상이 주문한 것인지, 아닌지 판별용
//   let bool = true;

//   for (let j = 0; j < orders[i].length; j++) {
//     // 단품메뉴 중 2명 밑으로 주문한 메뉴가 있으면 그 메뉴조합 제외, 반복문 탈출
//     if (count[orders[i][j]] < 2) {
//       bool = false;
//       break;
//     }
//   }
//   // 2명 밑으로 주문한 메뉴가 없다면 새로운 조합메뉴로 추가
//   if (bool) answer.push(orders[i]);
// }

// const array = Object.entries(count).sort((a, b) => b[1] - a[1]);
// return [count, answer];
