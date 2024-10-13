// https://www.acmicpc.net/problem/2816
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(chs) {
  let [KBS1, KBS2] = [0, 0];
  let pointer = 0;
  KBS1 = chs.indexOf("KBS1");
  KBS2 = chs.indexOf("KBS2");

  const answer = [];
  if (KBS1 === KBS2 - 1) {
    while (0 !== chs.indexOf("KBS1") && 1 !== chs.indexOf("KBS2")) {
      pointer = KBS2;
      answer.push("3".repeat(pointer));
      const c = chs.shift();
      chs.splice(KBS2, 0, c);
      if (chs.indexOf("KBS1") !== 0 && chs.indexOf("KBS2") !== 1) {
        answer.push("1".repeat(pointer));
      }
    }
  } else {
    const KBS1 = chs.indexOf("KBS1");
    answer.push("1".repeat(KBS1));
    answer.push("4".repeat(KBS1));
    const c1 = chs[KBS1];
    chs.splice(KBS1, 1);
    chs.splice(0, 0, c1);

    const KBS2 = chs.indexOf("KBS2");
    answer.push("1".repeat(KBS2));
    answer.push("4".repeat(KBS2 - 1));
    const c2 = chs[KBS2];
    chs.splice(KBS2, 1);
    chs.splice(1, 0, c2);
  }

  return answer.join("");
}

console.log(solution(input.slice(1)));
