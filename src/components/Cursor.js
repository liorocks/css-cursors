import React, { Component } from 'react';
import classnames from 'classnames';
import copy from 'copy-to-clipboard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle';
import CursorCSS from './CursorCSS';
import CursorHelp from './CursorHelp';
import CursorCode from './CursorCode';
import CursorBrowsers from './CursorBrowsers';
import { toCode } from '../utils';

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  copy = code => {
    if (!copy(code)) {
      return;
    }
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1200);
  };

  render() {
    const {
      name,
      version,
      code = '',
      prefixes = [],
      browsers = [],
      description,
    } = this.props;
    const { copied } = this.state;
    return (
      <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div
          onDoubleClick={() => {
            this.copy(code ? code : toCode(name, prefixes));
          }}
          className={classnames(
            { 'border-green': copied },
            `cursor-type-${name}`,
            'hover:shadow bg-white relative h-36 flex rounded justify-center items-center select-none border border-grey-light'
          )}
        >
          <CursorCSS version={version} />
          <div className="absolute pin-t pin-r pt-4 pr-4">
            {copied ? (
              <FontAwesomeIcon className="text-green" icon={faCheckCircle} />
            ) : (
              <CursorHelp content={description} />
            )}
          </div>
          <CursorCode code={code ? code : toCode(name)} />
          <CursorBrowsers browsers={browsers} />
        </div>
      </div>
    );
  }
}

export default Cursor;
