/**
 * 2018 KAKAO BLIND RECRUITMENT (https://programmers.co.kr/learn/courses/30/lessons/17681)
 * @param {number} n 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {string[]}
 */
 function solution(n, arr1, arr2) {
  const map1 = [];
  const map2 = [];
  const answer = [];

  // 주먹구구식으로 구현한 방법..
  for(let i = 0; i < n; i++){
    let crypto1 = arr1[i].toString(2)
    let crypto2 = arr2[i].toString(2)

    if(crypto1.length < n){
      while(crypto1.length < n){
        crypto1 = 0 + crypto1;
      }
    }

    if(crypto2.length < n){
      while(crypto2.length < n){
        crypto2 = 0 + crypto2;
      }
    }

    map1.push([...crypto1]);
    map2.push([...crypto2]);
  }

  for(let i = 0; i < n; i++){
    let crypto = '';
    for(let j = 0; j < n; j++){  
      if(Number(map1[i][j] + map2[i][j]) >= 1){
        crypto += '#';
      }else{
        crypto += ' ';
      }
    }
    answer.push(crypto);
  }
  
  return answer;
}
console.log(solution(5, [1, 1, 1, 1, 1], [2, 1, 1, 2, 1]));

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));
// ["######", "### #", "## ##", " #### ", " #####", "### # "]