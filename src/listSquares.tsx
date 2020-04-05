import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconListSquares: React.FC<IProps> = ({ size = 24, style }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
        height: size,
        width: size,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          width: '100%',
          padding: 0,
          paddingBottom: '100%',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
          }}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M80 368H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm0-320H16A16 16 0 000 64v64a16 16 0 0016 16h64a16 16 0 0016-16V64a16 16 0 00-16-16zm0 160H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm416 176H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"/>
        </svg>
      </div>
    </div>

  );
};
