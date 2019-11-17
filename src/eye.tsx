import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEye: React.FC<IProps> = ({ size = 24, style }) => {
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
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M288 144a110.94 110.94 0 00-31.24 5 55.4 55.4 0 017.24 27 56 56 0 01-56 56 55.4 55.4 0 01-27-7.24A111.71 111.71 0 10288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 000 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 000-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/>
        </svg>
      </div>
    </div>

  );
};
