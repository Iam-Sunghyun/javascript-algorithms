export default function hanoiTower(n, from, to, aux){
  if( n == 1 ){
    console.log(`${from} ${to}`);
    return;
  }
  hanoiTower(n - 1, from, to, aux);
  console.log(`${from} ${to}`);
  hanoiTower(n - 1, aux, to, from);
}

hanoiTower(4,1,3,2);
