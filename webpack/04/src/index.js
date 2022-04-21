import { f01 } from './util_esm'; // esm 문법으로 작성된 모듈을 esm 문법으로 가져오고 있다.
//import { f01 } from './util_commonjs'; // commonjs 문법으로 작성된 모듈을 esm 문법으로 가져오고 있다.
f01();

//import('./util_esm').then((util) => util.f01());

/* 
  tree shaking not working 
  - 사용되는 모듈이 esm이 아닌 경우
  - 사용하는 쪽에서 esm이 아닌 다른 모듈 시스템을 사용하는 경우
  - 동적 임포트를 사용하는 경우
  * 사용하는 쪽과 사용되는 쪽 모두 esm 문법을 사용하면 tree shaking이 제대로 동작한다.
  * esm 문법을 사용하더라도 모듈 내부에서 자신의 함수를 호출하는 경우에는 웹팩이 해당 함수를 제거하지 않는다.
  * 주의할 점은 작ㅇ한 코를 바벨로 컴ㅏ일한 이후에도 ESM 문법으로 남아있어야 한다.
  const presets = [
    '@babel/preset-env',
    {
      // ...
      modules: false,
    }
  ]
 */
