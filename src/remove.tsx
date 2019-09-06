import React from 'react';

interface IProps {
  additionalClasses?: string; // e.g. to set width; not height
}

export const IconRemove: React.FC<IProps> = ({ additionalClasses }) => {
  return (
    <div className={`my-svg-icon ${additionalClasses}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 13H5v-2h14v2z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};
