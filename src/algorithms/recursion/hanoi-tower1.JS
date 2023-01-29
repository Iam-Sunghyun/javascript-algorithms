/**
 * 재귀를 이용한 하노이 탑 기본
 * @param n 원판 개수
 * @param from 시작 기둥
 * @param to 목적지 기둥
 * @param aux 중간 기둥
 */
export default function hanoiTower(n, from, to, aux) {
  if( n == 1 ){
    console.log(`${from} ${to}`);
    return;
  }
  hanoiTower(n - 1, from, to, aux);
  console.log(`${from} ${to}`);
  hanoiTower(n - 1, aux, to, from);
}
