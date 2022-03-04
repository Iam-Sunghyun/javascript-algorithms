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
    
    
  }
}
