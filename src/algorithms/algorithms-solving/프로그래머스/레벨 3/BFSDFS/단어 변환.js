// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// BFS
function solution(begin, target, words) {
  // 주어진 words에 target 없으면 return 0
  if (!words.some((n) => n === target)) return 0;
  let answer = 0;

  function BFS(word) {
    const queue = [word];
    let lv = 0;

    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const w = queue.pop();
        if (w === target) {
          answer = lv;
          return;
        }
        // 한 단어만 다른지 체크
        for (let i = 0; i < words.length; i++) {
          if (w === words[i]) continue;
          let count = 0;
          for (let j = 0; j < words[i].length; j++) {
            if (w[j] !== words[i][j]) count += 1;
          }
          // 한 단어만 다르다면 tmp에 push
          if (count === 1) {
            tmp.push(words[i]);
          }
        }
      }
      lv += 1;
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
    }
  }

  BFS(begin);

  return answer;
}

// DFS
function solution(begin, target, words) {
  if (!words.some((n) => n === target)) return 0;

  const visited = new Array(words.length).fill(false);
  let answer = 0;

  function DFS(word, lv) {
    if (word === target) {
      answer = lv;
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (visited[i] === false) {
        let count = 0;
        for (let j = 0; j < words[i].length; j++) {
          if (word[j] !== words[i][j]) {
            count += 1;
          }
        }
        if (count === 1) {
          visited[i] = true;
          DFS(words[i], lv + 1);
          visited[i] = false;
        }
      }
    }
  }

  DFS(begin, 0);

  return answer;
}
