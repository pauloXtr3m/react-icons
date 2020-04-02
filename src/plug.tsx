import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconPlug: React.FC<IProps> = ({ size = 24, style }) => {
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
          viewBox="0 0 384 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M320 32a32 32 0 00-64 0v96h64zm48 128H16a16 16 0 00-16 16v32a16 16 0 0016 16h16v32a160.07 160.07 0 00128 156.8V512h64v-99.2A160.07 160.07 0 00352 256v-32h16a16 16 0 0016-16v-32a16 16 0 00-16-16zM128 32a32 32 0 00-64 0v96h64z"/>
        </svg>
      </div>
    </div>

  );
};
