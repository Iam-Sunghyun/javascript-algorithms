// https://school.programmers.co.kr/learn/courses/30/lessons/250137
function solution(bandage, health, attacks) {
  let max = attacks.at(-1)[0];
  const attackList = new Array(max + 1).fill(0);
  for (let i = 0; i < attacks.length; i++) {
    attackList[attacks[i][0]] = attacks[i][1];
  }

  let count = 0;
  let remainHealth = health;
  for (let i = 1; i < attackList.length; i++) {
    if (attackList[i] !== 0) {
      remainHealth -= attackList[i];
      count = 0;
      if (remainHealth <= 0) return -1;
      continue;
    } else {
      count += 1;
    }

    remainHealth += bandage[1];

    if (count === bandage[0]) {
      remainHealth += bandage[2];
      count = 0;
    }
    if (remainHealth > health) {
      remainHealth = health;
    }
  }

  return remainHealth <= 0 ? -1 : remainHealth;
}
