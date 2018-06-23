import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock.jsx';

export default () => {
  const mountNode = document.getElementById('container');
  ReactDOM.render(<Clock />, mountNode);
};
