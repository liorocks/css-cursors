import React from 'react';
import Browser from './Browser';

const CursorBrowsers = ({ browsers }) => {
  return (
    <div className="p-4 text-base text-grey-darker justify-around flex absolute pin-x pin-b">
      {browsers.map(browser => {
        const name = Object.keys(browser)[0];
        const key = browser[name];
        const isNotSupported = key === 0;
        const hasVendorPrefix = key === 2;
        const tooltip = isNotSupported
          ? 'Not Supported'
          : hasVendorPrefix
            ? 'Partially supported, uses vendor prefixes'
            : null;
        return (
          <Browser
            warning={hasVendorPrefix}
            disabled={isNotSupported}
            tooltip={tooltip}
            key={name}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default CursorBrowsers;
