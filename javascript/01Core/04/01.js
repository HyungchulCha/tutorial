let o01 = new Object();
let o02 = {};

let o03 = {
  a: 'a',
  b: 1,
  'd e': false, // 복수 단어는 따옴표로 묶어야 한다.
};
o03.c = true; // 프로퍼티 추가
delete o03.c; // 프로퍼티 삭제
o03['d e'] = true;
console.log(o03['d e']);
delete o03['d e'];
let key01 = 'f g';
o03[key01] = 'a';

const o04 = {
  a: 'a',
};
o04.a = 'b'; // 상수 객체는 수정될 수 있다.

let o05 = {
  a: 'a',
};
let key02 = prompt('insert text', 'a');
console.log(o05[key02]); // a
let key03 = 'a';
console.log(o05.key03); // undefined, 점 표기법은 이런 방식이 불가능하다.

let key04 = prompt('insert text', 'a');
let o06 = {
  [key04]: 1,
};
console.log(o06.a); // 1
let o07 = {};
o07[key04] = 1; // o07.a = 1, 변수 key04를 사용해 프로퍼티 이름을 만들 수 있다.
let key05 = 'a';
let o08 = {
  [key05 + 'b']: 1, // o08.ab = 1
};

function f01(a, b) {
  return {
    a: a,
    b: b,
  };
}
function f02(a, b) {
  return {
    a,
    b,
  };
}
let o09 = {
  a,
  b: 1,
};
let o10 = {
  0: 'a', // '0': 'a'
};
console.log(o10['0'], o10[0]); // a a

let o11 = {};
o11.__proto__ = 1;
console.log(o11.__proto__); // [object Object]

let o12 = {};
console.log(o12.noSuchProperty === undefined); // true
let o13 = {
  a: 'a',
  b: 1,
};
console.log('a' in o13); // true
console.log('c' in o13); // false
let key06 = 'a';
console.log(key06 in o13); // true
for (let k in o13) {
  console.log(k);
  console.log(o13[k]);
}

let o14 = {
  4: 'a',
  3: 'b',
  2: 'c',
  1: 'd',
};
for (let k in o14) {
  console.log(k); // 1, 2, 3, 4, 정수 프로퍼티는 자동 정렬된다.
  console.log(+k); // 4, 3, 2, 1, +를 붙여 속임수를 쓰면 순서대로 정렬된다.
}
// 키가 정수가 아닌 경우엔 작성된 순서대로 프로퍼티가 나열된다.
