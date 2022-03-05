function hanoiTowerRecursive({
  numberOfDiscs,
  fromPole,
  withPole,
  toPole,
  moveCallback,
}) {
  if (numberOfDiscs === 1) {
    // 원판이 하나인 경우
    moveCallback(fromPole.peek(), fromPole.toArray(), toPole.toArray());
    const disc = fromPole.pop();
    toPole.push(disc);
  }else{
    // 디스크가 더 있는 경우 재귀로 이동시킴

    hanoiTowerRecursive({
      numberOfDiscs: numberOfDiscs - 1,
      fromPole,
      withPole: toPole,
      toPole: withPole,
      moveCallback,
    });
    
  }
}



// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/hanoi-tower/hanoiTower.js
