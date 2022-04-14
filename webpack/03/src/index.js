// import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <p>Hi</p>
      <p>Descript</p>
      <p>{`App Version ${APP_VERSION}`}</p>
      <p>{`10 * 10 = ${TEN * TEN}`}</p>
    </div>
  );
}
ReactDOM.render(<App />, $('#root')[0]);
