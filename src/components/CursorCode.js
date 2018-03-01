import React from 'react';

const CursorCode = ({ code }) => {
  return (
    <div className="mb-2">
      <code>
        <pre>{code}</pre>
      </code>
    </div>
  );
};

export default CursorCode;
