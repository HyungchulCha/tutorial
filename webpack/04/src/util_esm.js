const arr = [];

export function f01() {
  console.log('f01', arr.length);
}
export function f02() {
  arr.push(10);
  console.log('f02');
}

f02(); // 모듈이 평가될 때 f02 함수가 실행된다.
