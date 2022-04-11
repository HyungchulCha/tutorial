const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        chrome: '40',
      },
      useBuiltIns: 'entry', // entry를 입력하면 지원하는 브라우저에서 필요한 폴리필만 포함시킨다.
      corejs: { version: 3, proposals: true }, // 바벨에게 core-js 버전을 알려준다.
    },
  ],
];

module.exports = { presets };
