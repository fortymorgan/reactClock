import React from 'react';
import cn from 'classnames';
import charsMap from '../charsMap';

const Number = (props) => {
  const { char } = props;
  const rowTemplate = [1, 2, 3, 4, 5]

  return (
    <table className="table table-borderless m-1">
      <tbody>
        {charsMap[char].map((row, index) => <tr key={`row-${index}`}>{rowTemplate.map(cell => {
          const className = cn({
            'table-active': row.includes(cell),
          });

          return <td className={className} key={`cell-${cell}`}></td>
        })}</tr>)}
      </tbody>
    </table>
  )
}

export default Number;
