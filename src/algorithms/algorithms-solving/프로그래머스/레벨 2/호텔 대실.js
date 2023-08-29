// https://school.programmers.co.kr/learn/courses/30/lessons/155651
function solution(book_time) {

  // 대실 입장 시간 기준으로 오름차순 정렬 
  book_time.sort((a, b) => {
    const [aHour, aMinuite] = a[0].split(':');
    const [bHour, bMinuite] = b[0].split(':');
    // 대실 입장 시간(h)이 같다면 분(m)을 기준으로 오름차순
    if (+aHour === +bHour) {
      return +aMinuite - +bMinuite;
    }
    return +aHour - bHour;
  });
  
  //console.log(book_time);
  let count = 1;
  for (let i = 1; i < book_time.length; i++) {
    const [startH, startM] = book_time[i][0].split(':');
    let check = false;

    for (let j = 0; j < book_time.length; j++) {
      if (book_time[j][1] === false) {
        continue;
      }

      const [endH, endM] = book_time[j][1].split(':');
      if (startH > endH || startH === endH && +startM >= +endM + 10) {
        check = true;
        book_time[j][1] = false; 
        break;
      }
    }
    if (check === false) {
      count += 1;
    }
  }

  // return [book_time, count];
  return count;
}

console.log(
  solution([
    ['18:20', '21:20'],
    ['14:20', '15:20'],
    ['16:40', '18:20'],
    ['15:00', '17:00'],
    ['14:10', '19:20'],
    
  ])
);

console.log(
  solution(
    [["09:10", "10:10"], ["10:20", "12:20"]]
  )
);

console.log(
  solution(
    [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]
  )
);

console.log(
  solution(
    [["08:00", "08:30"], ["08:00", "13:00"], ["12:30", "13:30"]]
  )
);



