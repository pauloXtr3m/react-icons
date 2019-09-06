import { sync as delSync } from 'del';
import fs from 'fs-extra';
import path from 'path';
import runAll from './runAll';
import { Icode } from './types';

const DIST_PATH = path.join(__dirname, '..', 'dist');
const BUILD_PATH = path.join(__dirname, '..', 'src');

const build = () => {
  delSync(DIST_PATH);
  delSync(BUILD_PATH);
  fs.mkdirSync(BUILD_PATH);
  runAll('assets/*.svg', (code: Icode) => {
    const fp = path.join(BUILD_PATH, code.filepath);
    fs.outputFile(fp, code.code);
  });
  fs.copyFileSync('scripts/extra/withClasses.tsx', BUILD_PATH + '/withClasses.tsx');
};

build();
