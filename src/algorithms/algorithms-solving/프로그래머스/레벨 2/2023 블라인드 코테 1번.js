// 
function solution(today, terms, privacies) {
  const answer = [];
  const todayArr = today.split('\.').map(Number);
  
  // 객체에 약관별 기간 저장
  const termObj = terms.reduce((acc, val) => {
    const term = val.split(' ');
    acc[term[0]] = Number(term[1]);
    return acc;
  }, {});

  // 개인정보가 저장된 시점부터 현재까지 기간 계산
  privacies.forEach((privacie, i) => {
    // 저장년도와 약관 구하기
    const [a, term] = privacie.split(' ');
    const date = a.split('\.').map(Number);
    let acc = 0;
    
    // 월 차이 계산
    if(todayArr[0] - date[0] > 0)
      acc += (todayArr[1] - date[1] + (12 * (todayArr[0] - date[0]))) * 28;
    else 
      acc += (todayArr[1] - date[1]) * 28;
   
    // 일 계산
    acc += (todayArr[2] - date[2]);

    // 저장된 기간이 (약관 개월수 * 28)보다 크면 파기 대상
    if (acc >= termObj[term] * 28) answer.push(i + 1);

  });
 

  return answer
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"],
  ["2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C"],
)); // [1, 3]


console.log(solution("2020.01.01",  ["Z 3", "D 5"],
  ["2019.01.01 D", 
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z"])); // [1,4,5]