const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        chrome: '40',
      },
      //useBuiltIns: 'entry', // entry를 입력하면 지원하는 브라우저에서 필요한 폴리필만 포함시킨다.
      useBuiltIns: 'usage', // usage를 입력하면 코드에서 사용된 기능의 폴리필만 추가된다. usage를 입력할 때는 core-js 모듈을 가져오는 코드가 필요하지 않다.
      corejs: { version: 3, proposals: true }, // 바벨에게 core-js 버전을 알려준다.
    },
  ],
];

module.exports = { presets };
