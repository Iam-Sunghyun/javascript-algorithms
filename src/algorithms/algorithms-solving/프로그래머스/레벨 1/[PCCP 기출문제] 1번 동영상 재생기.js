// https://school.programmers.co.kr/learn/courses/30/lessons/340213#
function solution(video_len, pos, op_start, op_end, commands) {
  // [시간, 초]
  let now = pos.split(":");
  const opStart = op_start.split(":");
  const opEnd = op_end.split(":");
  const videoLen = video_len.split(":");

  function isOpening() {
    if (+now[0] >= +opStart[0] && +now[0] <= +opEnd[0]) {
      if (+now[0] === +opStart[0] && +now[1] < +opStart[1]) {
        return;
      }
      if (+now[0] === +opEnd[0] && +now[1] > +opEnd[1]) {
        return;
      }
      now = op_end.split(":");
    }
  }

  for (const command of commands) {
    // 오프닝 구간인지 우선 체크
    isOpening();

    // 명령어 체크
    if (command === "prev") {
      now[1] = String(+now[1] - 10);
      if (+now[1] < 0) {
        now[1] = String(60 - Math.abs(now[1]));
        now[0] = String(now[0] - 1);
      }
      if (+now[0] < 0) {
        now[0] = "00";
        now[1] = "00";
      }
      isOpening();
    }
    if (command === "next") {
      now[1] = String(+now[1] + 10);
      if (+now[1] > 59) {
        now[1] = String(+now[1] - 60);
        now[0] = String(+now[0] + 1);
      }
      if (+now[0] >= 59) {
        now[1] = "59";
        now[0] = "59";
      }
      if (+now[0] === +videoLen[0] && +now[1] > +videoLen[1]) {
        now[1] = videoLen[1];
      }

      isOpening();
    }
  }
  const answer = now.map((n) => (n.length === 1 ? "0" + n : n));
  return answer.join(":");
}
