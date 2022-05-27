/**
 * 2022 KAKAO BLIND RECRUITMENT 문제 (https://programmers.co.kr/learn/courses/30/lessons/92334)
 * @param {String[]} id_list 이용자의 ID가 담긴 문자열 배열 
 * @param {String[]} report 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
 * @param {Number} k 정지 기준이 되는 신고 횟수
 * @returns {Number[]} answer 각 유저별로 처리 결과 메일을 받은 횟수
 */
function solution(id_list, report, k) {
  
  // 신고 결과 메일 발송 리스트
  const answer = new Array(id_list.length).fill(0);
  
  // 프로퍼티 키를 신고 당한 유저, 프로퍼티 값으로 신고한 유저들을 저장할 배열을 갖는 객체
  const reportList = id_list.reduce((acc, cur) => { acc[cur] = []; return acc }, {} );
  
  // reportList의 프로퍼티 값에 프로퍼티 키에 해당되는 유저를 신고한 유저들을 저장 한다
  // 한 유저가 동일한 유저를 여러번 신고 한 경우 1회 신고로 처리 되기 때문에
  // includes 반환 값이 false인 경우(신고 처리 안되어 있는 경우)에만 삽입 한다 
    report.map(cur => { 
    const [userId, reportId] = cur.split(' '); 
    if(!reportList[reportId].includes(userId)){
      reportList[reportId].push(userId);
    }               
  });
  
  // reportList 프로퍼티 값의 length가 k 이상인 경우, 즉 k번 이상 신고 당하여 정지 대상인 경우
  // 해당 유저를 신고했던 유저들에게 처리 결과 메일을 발송해야 한다
  // answer 배열에서 정지 대상 유저를 신고했던 유저에 해당되는 요소에 +1 해준다
  for(const key in reportList){
    if(reportList[key].length >= k){
      reportList[key].forEach(user => answer[id_list.indexOf(user)] += 1);
    }
  }
                       
  return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
