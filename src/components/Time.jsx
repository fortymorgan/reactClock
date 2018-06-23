import React from 'react';
import Number from './Number.jsx';

const Time = (props) => {
  const { value } = props;

  const chars = value > 9 ? `${value}` : `0${value}`;

  return (
    <div className="d-flex justify-content-start m-3">
      {chars.split('').map((char, index) => <Number key={`char-${index}-${char}`} char={char} />)}
    </div>
  )
}

export default Time;
