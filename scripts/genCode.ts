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
  width?: string; // must be width; cannot set height
}

const ${componentName}: React.FunctionComponent<IProps> = ({ width }) => {
  return (
    <div className="my-svg-icon" style={{ width }}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
          ${svgPaths}
        </svg>
      </div>
    </div>
  );
};

export default ${componentName};
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