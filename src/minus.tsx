import React from 'react';

interface IProps {
  additionalClasses?: string; // e.g. to set width; not height
}

export const IconMinus: React.FC<IProps> = ({ additionalClasses }) => {
  return (
    <div className={`my-svg-icon ${additionalClasses}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
      </div>
    </div>
  );
};
