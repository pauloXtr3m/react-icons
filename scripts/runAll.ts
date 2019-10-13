import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import SVGO from 'svgo';
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
};
