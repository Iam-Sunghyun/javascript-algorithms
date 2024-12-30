// https://www.acmicpc.net/problem/1283
const input = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

function solution(list) {
  const shortcuts = new Set();
  const strs = list.map((n) => n.split(" "));

  // 모든 옵션 첫 글자 단축키로 지정돼 있는지 확인
  for (let i = 0; i < strs.length; i++) {
    let check = true;
    for (let j = 0; j < strs[i].length; j++) {
      const str = strs[i][j];
      // i번 옵션의 j번 단어 첫 글자 확인
      if (!shortcuts.has(str[0].toUpperCase())) {
        shortcuts.add(str[0].toUpperCase());
        strs[i][j] = `[${str[0]}]${str.slice(1)}`;
        check = false; // 단축키 지정 완료
        break;
      }
    }
    // i번 옵션 모든 단어 첫 글자가 이미 단축키로 지정돼 있다면
    // i번 옵션 모든 단어 철자 확인
    if (check) {
      for (let k = 0; k < strs[i].length; k++) {
        const str = strs[i][k];
        for (let l = 0; l < strs[i][k].length; l++) {
          // i번 옵션 k번 단어의 l번 철자가 단축키로 지정돼있지 않다면 지정
          if (!shortcuts.has(str[l].toUpperCase())) {
            shortcuts.add(str[l].toUpperCase());

            // 단축키로 지정된 부분 [철자] 꼴로 변환
            strs[i][k] = [...strs[i][k]];
            strs[i][k][l] = `[${str[l]}]`;
            strs[i][k] = strs[i][k].join("");
            check = false; // 단축키 지정 완료
            break;
          }
        }
        // i번 옵션 k번 단어의 l번 철자 단축키 지정 완료 시 break;
        if (!check) {
          break;
        }
      }
    }
  }

  return strs.map((n) => n.join(" ")).join("\n");
}

console.log(solution(input.slice(1)));
