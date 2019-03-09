import React from 'react';

interface IProps {
  width?: string; // must be width; cannot set height
}

const IconExpandMore: React.FunctionComponent<IProps> = ({ width }) => {
  return (
    <div className="my-svg-icon" style={{ width }}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default IconExpandMore;
