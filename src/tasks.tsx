import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconTasks: React.FC<IProps> = ({ size = 24, style }) => {
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
          <path fill="currentColor" d="M139.61 35.5a12 12 0 00-17 0L58.93 98.81l-22.7-22.12a12 12 0 00-17 0L3.53 92.41a12 12 0 000 17l47.59 47.4a12.78 12.78 0 0017.61 0l15.59-15.62L156.52 69a12.09 12.09 0 00.09-17zm0 159.19a12 12 0 00-17 0l-63.68 63.72-22.7-22.1a12 12 0 00-17 0L3.53 252a12 12 0 000 17L51 316.5a12.77 12.77 0 0017.6 0l15.7-15.69 72.2-72.22a12 12 0 00.09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 000-96zm432 16H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H208a16 16 0 00-16 16v32a16 16 0 0016 16h288a16 16 0 0016-16v-32a16 16 0 00-16-16z"/>
        </svg>
      </div>
    </div>

  );
};
