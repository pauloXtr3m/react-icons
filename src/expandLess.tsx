import React from 'react';

interface IProps {
  classNames?: string; // additional classes e.g. to set width (not height)
}

export const IconExpandLess: React.FC<IProps> = ({ classNames }) => {
  return (
    <div className={`my-svg-icon ${classNames}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};
