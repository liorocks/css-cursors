import React from 'react';

const Tip = ({ tip }) => {
  return (
    <div className="pt-8">
      <div className="p-2 rounded-full bg-indigo-darker items-center text-indigo-lightest flex">
        <span className="flex rounded-full bg-purple-dark uppercase px-2 py-1 text-xs font-bold mr-3">
          Tip
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">{tip}</span>
      </div>
    </div>
  );
};

export default Tip;
