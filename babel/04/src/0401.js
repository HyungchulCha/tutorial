// import 'core-js';
// core-js 모듈을 가져오면 해당 모듈의 모든 폴리필이 포함된다.
// 필요하지 않은 폴리필까지 포함되므로 번들 파일의 크기가 커진다.
import 'core-js/features/promise';
import 'core-js/features/object/values';
import 'core-js/features/array/includes';

const p = Promise.resolve(10);
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const arr = Object.values(obj);
const exist = arr.includes(20);
