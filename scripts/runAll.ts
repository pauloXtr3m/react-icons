import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import SVGO from 'svgo';
import { getSvgDims } from './helpers';
import { Icode } from './types';
import genCode from './genCode';

const svgo = new SVGO({});

// get the icon name
const getName = (filepath: string) => path.basename(filepath, path.extname(filepath));

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

// build the optimized SVG data
const runAll = (globPattern: string, callback: (code: Icode) => void) => {
  const filepaths = glob.sync(globPattern);
  filepaths.forEach(filepath => {
    fs.readFile(filepath, 'utf8', async (err, data) => {
      if (err) {
        throw err;
      }
      try {
        const res = await handleFile(filepath, data);
        if (res) {
          callback(res);
        }
      } catch (error) {
        console.error('handleFile failed');
      }
    });
  });
};

export default runAll;
