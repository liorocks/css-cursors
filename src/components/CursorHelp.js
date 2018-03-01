import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';

const CursorHelp = ({ content }) => {
  return (
    <div
      className="cursor-help text-grey-dark"
      data-balloon-length="medium"
      data-balloon-pos="left"
      data-balloon={content}
    >
      <FontAwesomeIcon icon={faQuestionCircle} />
    </div>
  );
};

export default CursorHelp;
