import React from 'react';

interface IProps {
  width?: string; // must be width; cannot set height
}

const IconExpandLess: React.FC<IProps> = ({ width }) => {
  return (
    <div className="my-svg-icon" style={{ width }}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default IconExpandLess;
