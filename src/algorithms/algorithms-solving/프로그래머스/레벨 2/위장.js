/**
 * 프로그래머스 **레벨 2**
 * 해시 https://programmers.co.kr/learn/courses/30/lessons/42578 
 * @param {string[][]} clothes 
 * @returns {number}
 */
function solution(clothes) {
  const clothesObj = {};
  let acc = 1;
  let answer = 0;

  // 옷 부위별로 분류
  clothes.forEach(c => {
    if (!clothesObj[c[1]]) clothesObj[c[1]] = [];
    clothesObj[c[1]].push(c[0]);
  });

  // 부위 별 경우의 수 곱해주기 
  // 부위 마다 착용 할 수 있는 개수는 1개이고(노란 모자를 썻을 경우 초록색 터번을 또 착용할 순 없음)
  // 미착용까지 생각하여 부위 별 경우의 수는 (가짓 수 + 1)이 된다
  // ex) headgear = [노란 모자, 초록 터번] -> [미착용], [노란 모자 착용], [초록 터번 착용] 3가지 가능
  for (const cloth in clothesObj) {
    acc *= (clothesObj[cloth].length + 1); // 여기서 +1 은 미착용의 경우를 더해주는 것
  }
  answer += acc;

  // 최소 1개는 입어야 하므로 모두 입지 않은 경우를 빼준다
  return answer - 1;
  
}

console.log(solution([["yellow_hat", "headgear"],
                      ["blue_sunglasses", "eyewear"],
                      ["green_turban", "headgear"]])); // 5