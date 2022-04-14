import React from 'react';
import ReactDOM from 'react-dom';
// import Style from './App.css';
// console.log(Style);
import './App.css';
import Json from './data.json'; // JSON 모듈은 웹팩에서 기본적으로 처리해준다.
import Text from './data.txt'; // raw-loader
import Icon from './data.png'; // file-loader
// 이미지 파일을 번들 파일에 포함시키면 브라우저의 파일 요청 횟수를 줄일 수 있다. url-loader

console.log(Json, Icon, Text);

function App() {
  return (
    <div class='container'>
      <h1 class='title'>Hi</h1>
      <p>{`${Json.a} ${Json.c}`}</p>
      <p>{`${Text}`}</p>
      <img src={Icon} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
