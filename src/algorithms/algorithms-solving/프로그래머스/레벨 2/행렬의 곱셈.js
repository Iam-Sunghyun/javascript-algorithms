/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */
/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */
 function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(new Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr2[0].length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      let acc = 0;
      for (let k = 0; k < arr1[j].length; k++) {
        // console.log(answer, [arr1[j][k] ,arr2[k][i]], j, i)
        acc += (arr1[j][k] * arr2[k][i]);
        
      }
      answer[j][i] = acc
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); //	[[15, 15], [15, 15], [15, 15]]

// console.log(
//   solution(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6]
//     ]
//   )
// ); //	[[15, 15], [15, 15], [15, 15]]


// 틀린 코드
// function solution(arr1, arr2) {
//   const answer = new Array(arr1.length).fill(new Array(arr2[0].length).fill(0));

//   for (let i = 0; i < arr2[0].length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
      
//       for (let k = 0; k < arr1[j].length; k++) {
//         // console.log(answer, [arr1[j][k] ,arr2[k][i]], j, i)
//         answer[j][i] += (arr1[j][k] * arr2[k][i]);
        
//       }
      
//     }
//   }

//   return answer;
// }