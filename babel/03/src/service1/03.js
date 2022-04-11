const element = <div>hi</div>;
const text = `element type is ${element.type}`;
const add = (a, b) => a + b;

/*
  package.json, .babelrc, .babelrc.js 파일을 만날 때까지 부모 폴더로 이동한다.
  프로젝트 루트의 babel.config.js 파일이 전체 설정 파일이다.
  지역 설정 파일이 전역 설정 파일을 덮어쓴다.
 */
