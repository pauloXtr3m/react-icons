import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import SVGO from 'svgo';
import lodash from 'lodash';
import { getSvgDims } from './helpers';
import genCode from './genCode';

const BUILD_PATH = path.join(__dirname, '..', 'src');

const svgo = new SVGO({});

// optimize file
const handleFile = async (filepath: string, data: string) => {
  try {
    const res = await svgo.optimize(data, { path: filepath });
    const dims = getSvgDims(res.info, res.data);
    const name = getName(filepath);
    console.log(`... generating ${name} ...`);
    return genCode(name, res.data, dims);
  } catch (error) {
    console.error(error);
  }
};

// get the icon name
export const getName = (filepath: string) => path.basename(filepath, path.extname(filepath));

// get component name
export const getComp = (filepath: string) => {
  const name = path.basename(filepath, path.extname(filepath));
  const filename = lodash.camelCase(name);
  return `Icon${lodash.upperFirst(filename)}`;
};

// build the optimized SVG data
export const runAll = (globPattern: string) => {
  const filepaths = glob.sync(globPattern);

  filepaths.forEach(async filepath => {
    try {
      const data = fs.readFileSync(filepath, 'utf8');
      const res = await handleFile(filepath, data);
      if (res) {
        const fp = path.join(BUILD_PATH, res.filepath);
        fs.outputFileSync(fp, res.code);
      } else {
        throw new Error('handleFile failed');
      }
    } catch (error) {
      console.warn('ERROR: ' + error);
    }
  });

  const idx = filepaths.reduce(
    (acc, curr) => `${acc}export * from './${getName(curr)}';\n`,
    `export * from './withClasses';\n`,
  );
  const fpidx = path.join(BUILD_PATH, 'index.ts');
  fs.outputFileSync(fpidx, idx);

  let storyboard = `import React from 'react';
import { storiesOf } from '@storybook/react';
`;

  storyboard += filepaths.reduce(
    (acc, curr) => `${acc}import { ${getComp(curr)} } from '../src';\n`,
    '',
  );

  storyboard += `
const stories = storiesOf('React Icons', module);

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
};

const s: React.CSSProperties = {
  marginRight: 10,
};

stories.add('IconAccount', () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
`;

  storyboard += filepaths.reduce((acc, curr) => {
    const n = `${getComp(curr)}`;
    return `${acc}    <div style={rowStyle}><${n} /><span style={s} />${n}</div>\n`;
  }, '');

  storyboard += `  </div>
));
`;

  fs.outputFileSync(path.join(__dirname, '..', 'stories', 'allicons.stories.tsx'), storyboard);
};
