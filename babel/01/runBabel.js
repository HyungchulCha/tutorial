const babel = require('@babel/core');
const fs = require('fs');

const filename = './src/01.js';
const source = fs.readFileSync(filename, 'utf8');
const presets = ['@babel/preset-react'];
const plugins = ['@babel/plugin-transform-arrow-functions', '@babel/plugin-transform-template-literals'];
const { code } = babel.transformSync(source, {
  filename,
  presets,
  plugins,
  configFile: false, // babel.config.js 설정파일을 사용하지 않도록 한다.
});

console.log(code);
