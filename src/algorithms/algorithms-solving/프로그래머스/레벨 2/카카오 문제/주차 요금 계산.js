/** 
 * 프로그래머스 레벨 2
 * 2022 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/92341
 */ 
function solution(fees, records) {
  const timeRecord = {};

  // 입/출차 시간 분으로 환산
  const record = records.map((element) => {
    const r = element.split(" ");
    const time = r[0].split(":");
    r[0] = time[0] * 60 + Number(time[1]);
    return r;
  });

  // 이용시간 계산을 수월하게 하기 위해 이용시간 객체 값 0으로 초기화
  record.forEach((element) => {
    if (!timeRecord[element[1]]) timeRecord[element[1]] = 0;
  });
  
  // 이용시간 계산(IN 이면 더하고, OUT이면 빼줌)
  record.forEach((element) => {
    if (element[2] === "IN") timeRecord[element[1]] += element[0];
    else if (element[2] === "OUT") timeRecord[element[1]] -= element[0];
  });

  
  // 차량번호 오름차순 정렬 후 요금 계산
  const answer = Object.entries(timeRecord).sort().map(e => {
    // 이용시간이 음수면 그대로 두고, 양수면 입차 후 출차 기록이 없는 것이므로
    // 문제에 제시된 것처럼 마지막 시각에 출차한 것으로 간주하여 1439를 빼준다.
    const fee = e[1] < 0 ? Math.abs(e[1]) : Math.abs(e[1] - 1439);

    // 이용시간이 기본요금 뿐인지, 추가 요금이 부가되는지 계산
    if (fee <= fees[0]) return fees[1];
    else {
      return fees[1] + Math.ceil((fee - fees[0]) / fees[2]) * fees[3]
    }
  });

  return answer;
}

// console.log(
//   solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
// );

// console.log(
//   solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"])
// );
console.log(
  solution([1, 461, 1, 10],["00:00 1234 IN"])
);