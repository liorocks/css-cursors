import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { getBrowserIcon } from '../utils';

const Browser = ({ name, tooltip, warning, disabled }) => {
  return (
    <div data-balloon-pos="up" data-balloon={tooltip}>
      <FontAwesomeIcon
        icon={getBrowserIcon(name)}
        className={classnames({
          'text-yellow-dark': warning,
          'opacity-25': disabled,
        })}
      />
    </div>
  );
};

export default Browser;
