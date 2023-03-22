// DP or 파스칼 삼각형 이용 문제 https://www.acmicpc.net/problem/2775
// 파스칼 삼각형 정답 참고 https://seokjun.gatsbyjs.io/posts/coding/javascript/baekjoon/basicmath1/2775/
// 아래 풀이는 DP로 풀이하였음
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(citizen){
   const memo = Array.from({length: 14 + 1}, () => new Array(14 + 1).fill(0));
   const answer = [];

   function DFS(k, n) {
       if(k === 0) return n;
       if(n === 1) return 1;
       
       if(memo[k][n] !== 0) return memo[k][n]; 
       memo[k][n] = DFS(k, n - 1) + DFS(k - 1, n)
       
       return memo[k][n];
   }
   
   for(let i = 1; i < citizen.length; i += 2){
        answer.push(DFS(+citizen[i], +citizen[i + 1]))    
   }
    return answer.join('\n');
}

console.log(solution(input));