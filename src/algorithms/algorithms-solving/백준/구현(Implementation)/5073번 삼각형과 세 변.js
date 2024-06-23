// https://www.acmicpc.net/problem/5073
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(triangles) {


  const answer = [];
  for (let i = 0; i < triangles.length; i++) {
    if (isTriangle(triangles[i])) {
      answer.push(whatIsit(triangles[i]));
    } else {
      answer.push('Invalid');
    }
  }
  return answer.join('\n');
}

function isTriangle(sides) {
  let max = -Infinity;
  let index = 0;
  for (let i = 0; i < sides.length; i++) {
    if (max < sides[i]) {
      max = sides[i];
      index = i;
    }
  }
  let sum = 0;
  for (let i = 0; i < sides.length; i++) {
    if (i === index) continue;
    sum += sides[i];
  }
  return sum > max ? true : false;
}

function whatIsit(sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'Equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}



console.log(solution(input.slice(0, -1)));