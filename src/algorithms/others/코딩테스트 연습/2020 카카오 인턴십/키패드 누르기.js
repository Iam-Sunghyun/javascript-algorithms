/**
 * 2020 카카오 인턴십 문제
 * @param {number[]} numbers 순서대로 누를 번호가 담긴 배열
 * @param {string} hand 왼손잡이인지 오른손잡이인 지를 나타내는 문자열
 * @returns {string} answer 누르는 손가락 순서 배열
 */
function solution(numbers, hand) {
  const answer = [];

 
  const keypad = {
    1: [1, 4], 2: [2, 4], 3: [3, 4],
    4: [1, 3], 5: [2, 3], 6: [3, 3],
    7: [1, 2], 8: [2, 2], 9: [3, 2],  // ->  9: [2, 2]로 되어있었어서 한참 애먹음
    '*': [1, 1], 0: [2, 1], '#': [3, 1]
  };
  let left = '*';
  let right = '#';

  // 1, 4, 7 => 왼손
  // 3, 6, 9 => 오른손
  // 2, 5, 8, 0 => 가까운 손, 두 엄지 거리 같을 경우 오른손 잡이인지 왼손 잡이인지 체크 필요
  
  for(const item of numbers){
      if(item === 1 || item === 4 || item === 7){
       
        answer.push('L')
        left = item; // 왼손 위치 갱신

      }else if(item === 3 || item === 6 || item === 9){

        answer.push('R')
        right = item; // 오른손 위치 갱신

      }else if(item === 2 || item === 5 || item === 8 || item === 0){

        const distance = getDistance(keypad[right], keypad[left], keypad[item]);
        if(distance.rightDistance > distance.leftDistance){
          
          answer.push('L');
          left = item;

        }else if(distance.rightDistance < distance.leftDistance){

          answer.push('R');
          right = item;

        }else if(distance.rightDistance === distance.leftDistance && hand === 'right'){

          answer.push('R');
          right = item;

        }else if(distance.rightDistance === distance.leftDistance && hand === 'left'){

          answer.push('L');
          left = item;

        }
      }
  }

  console.log(left, right)
  return answer.join('');
}

/**
 * 오른손, 왼손과 눌러야 될 키와 거리를 구하는 메서드
 * @param {number[]} rLocation 오른손 좌표
 * @param {number[]} lLocation 왼손 좌표
 * @returns {object} result 눌러야 될 키와 오른손, 왼손과의 거리를 값으로 갖는 객체
 */
function getDistance(rLocation, lLocation, key){
  
  const result = key.reduce((prev, curr, index) =>{
    prev.rightDistance += Math.abs(curr - rLocation[index]);
    prev.leftDistance += Math.abs(curr - lLocation[index]);

    return prev

  }, { rightDistance: 0, leftDistance: 0 });

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))
