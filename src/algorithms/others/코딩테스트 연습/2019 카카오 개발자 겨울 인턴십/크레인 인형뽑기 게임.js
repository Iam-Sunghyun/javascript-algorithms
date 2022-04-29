/**
 * 2019 카카오 개발자 겨울 인턴십 (https://programmers.co.kr/learn/courses/30/lessons/64061)
 * @param {number[][]} board 
 * @param {number[]} moves 
 * @returns {number} answer
 */
 function solution(board, moves) {
  var answer = 0;

  const basket = [];

  /** board         moves
   * [[0,0,0,0,0],  [1, 5, 3, 5, 1, 2, 1, 4]
   *  [0,0,1,0,3],
   *  [0,2,5,0,1],
   *  [4,2,4,4,2],
   *  [3,5,1,3,1]]  
   */

  // moves에 따라 고른 인형들을 basket[]에 0부터 차례대로 저장
  moves.forEach(element => {  

    for(let i = 0; i < board.length; i++){
      if(board[i][element - 1] !== 0 ){       
        basket.push(board[i][element - 1]);
        board[i][element - 1] = 0;
        break;
      }
    }
  });

  // basket에 인접 요소들의 값이 같을 경우 제거하고 answer에 2를 더해준다
  // 그 후 제거된 basket을 처음부터 다시 검사 한다
  // 이때 i = 0으로 초기화 할 경우 다음 검사 때 i++가 적용되어 0번 인덱스가 아닌 1번 인덱스부터 탐색하기 때문에
  // 결과가 정확하지 않은 경우가 있다 (아래 2번째 테스트의 경우)
  // 따라서 i = -1을 할당해준다
  for(let i = 0; i < basket.length - 1; i++){    
      
    if(basket[i] === basket[i + 1]){
      basket.splice(i, 2);
      answer += 2;
      i = -1;
    }   
  }
  
  return answer;
}
