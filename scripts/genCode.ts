import lodash from 'lodash';
import { Icode, Idims } from './types';

const getSVGContent = (source: string) => source.slice(source.indexOf('>') + 1).slice(0, -6);

const getReactCode = (
  componentName: string,
  width: string,
  height: string,
  svgPaths: string,
): string => {
  return `import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const ${componentName}: React.FC<IProps> = ({ size = 24, style }) => {
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
          viewBox="0 0 ${width} ${height}"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${svgPaths}
        </svg>
      </div>
    </div>

  );
};
`;
};

const genCode = (name: string, svgSource: string, dims: Idims): Icode => {
  const filename = lodash.camelCase(name);
  const componentName = `Icon${lodash.upperFirst(filename)}`;
  const svgPaths = getSVGContent(svgSource);
  const code = getReactCode(componentName, dims.width, dims.height, svgPaths);
  const filepath = `${filename}.tsx`;
  return { filepath, code };
};

export default genCode;
