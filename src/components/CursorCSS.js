import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCSS3 from '@fortawesome/fontawesome-free-brands/faCss3Alt';

const CursorCSS = ({ version }) => {
  if (version !== 3) {
    return null;
  }
  return (
    <div className="absolute pin-t pin-l pt-4 pl-4">
      <div data-balloon-pos="up" data-balloon="CSS 3">
        <FontAwesomeIcon className="text-blue text-base" icon={faCSS3} />
      </div>
    </div>
  );
};

export default CursorCSS;
