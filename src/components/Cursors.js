import React from 'react';
import Cursor from './Cursor';

const Cursors = props => {
  return (
    <div className="flex flex-wrap flex-1 p-6">
      {props.cursors.map(cursor => <Cursor key={cursor.name} {...cursor} />)}
    </div>
  );
};

export default Cursors;
