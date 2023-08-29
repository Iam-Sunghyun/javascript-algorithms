/**
 * 프로그래머스 레벨 2 
 * 모든 케이스 잘 살펴봐야 하는 문제
 * https://school.programmers.co.kr/learn/courses/30/lessons/160585
 */
function solution(board) {
  const OX = [0, 0];
  const boardString = board.join('');

  // O, X 개수 카운트
  for (let i = 0; i < boardString.length; i++) {
    if (boardString[i] === 'O') OX[0] += 1;
    if (boardString[i] === 'X') OX[1] += 1;
  }

  // O가 연속 2번 이상 둔 경우 return 0
  if (Math.abs(OX[0] - OX[1]) >= 2) return 0;
  // X가 연속 2번 이상 둔 경우 return 0
  if (OX[0] < OX[1]) return 0;
  // 아무것도 안 둔 경우
  if (OX[0] + OX[1] === 0) return 1;

  // 빙고 개수 확인
  const bingoCount = { O: 0, X: 0 };
  for (let i = 0; i < 3; i++) {
    // ㅣ자(세로) 빙고 확인
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] !== '.') {
        bingoCount[board[i][0]] += 1;
      }
    }
    // ㅡ자(가로) 빙고 확인
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] !== '.') {
        bingoCount[board[0][i]] += 1;
      }
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] !== '.') {
      bingoCount[board[0][0]] += 1;
    }
  } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] !== '.') {
      bingoCount[board[0][2]] += 1;
    }
  }

  if (bingoCount['O'] > 0 && bingoCount['X'] > 0) return 0; // O, X 둘 다 빙고가 존재하는 경우 return 0
  if (bingoCount['O'] === 1 && OX[0] <= OX[1]) return 0;    // O 빙고가 존재하면서 X의 개수가 O와 같거나 큰 경우 return 0
  if (bingoCount['X'] === 1 && OX[0] > OX[1]) return 0;     // X 빙고가 존재하면서 O의 개수가 X 개수 보다 큰 경우 return 0
  return 1;
}

console.log(solution(['O.X', '.O.', '..X'])); // 1
console.log(solution(['OOO', '...', 'XXX'])); // 0
console.log(solution(['...', '.X.', '...'])); // 0
console.log(solution(['...', '.O.', '...'])); // 1
console.log(solution(['...', '...', '...'])); // 1
console.log(solution(['OXO', 'XOX', 'X..'])); // 0
console.log(solution(['.O.', '...', 'X..'])); // 1
console.log(solution(['OX.', 'XOX', 'OXO'])); // 0
console.log(solution(['OOO', 'OXX', 'OXX'])); // 1
console.log(solution(["OXO", ".OX", "OXX"])); // 1
console.log(solution(["OXO", ".X.", ".X."])); // 0
console.log(solution(["OXX", "OOX", "OXO"])); // 1
console.log(solution(["OXO", "XOX", "OXO"])); // 1
console.log(solution(["O.O", ".OX", "OXX"])); // 1
console.log(solution(["OXO", ".OX", "OXX"])); // 0
console.log(solution(["XOX", ".XO", "XOO"])); // 0
console.log(solution(["OXX", "OOX", "OXO"])); // 0









